import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "services/apiClient";
import Swal from "sweetalert2";

type Usuario = {
    email: string;
    permissions: string[];
    role: string;
}

type SignInCredentials = {
    email: string;
    senha: string;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    usuario: Usuario | undefined;
    estaAutenticado: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
    destroyCookie(undefined, 'intelligent.clin.token');
    destroyCookie(undefined, 'intelligent.clin.refreshToken');

    authChannel.postMessage("signOut");
    Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<Usuario>();
    const estaAutenticado = !!usuario;

    useEffect(() => {
        const { 'intelligent.clin.token': token } = parseCookies();

        if (token) {
            api.get('/usuarios/me').then(response => {
                const { email, permissions, role } = response.data;
                setUsuario({
                    email,
                    permissions,
                    role
                })
            }).catch(() => {
                signOut();
            })
        }
    }, []);

    useEffect(() => {
        authChannel = new BroadcastChannel('auth');

        authChannel.onmessage = (message) => {
            switch (message.data) {
                case "signOut":
                    signOut();
                    authChannel.close();
                    break;
                case "signIn":
                    window.location.replace('http://localhost:3000/dashboard');
                    // window.location.replace('https://intelligen-clin.vercel.app/dashboard');
                    break;
                default:
                    break;
            }
        }
    }, []);


    async function signIn({ email, senha }: SignInCredentials) {
        try {
            const response = await api.post('/login', {
                email,
                senha
            });

            const { token, refreshToken, permissions, role } = response.data;

            setCookie(undefined, 'intelligent.clin.token', token, {
                maxAge: 60 * 60 * 24 * 3, // 3 meses
                path: '/',
            });

            setCookie(undefined, 'intelligent.clin.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30 * 3, // 3 meses
                path: '/',
            });

            setUsuario({
                email,
                permissions,
                role
            });

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            Router.push("/dashboard");
            authChannel.postMessage("signIn");
        } catch (error) {
            const errorString = String(error);
            let mensagem = 'Recarregue a página ou tente novamente mais tarde.'
            if (errorString.includes('Network Error'))
                mensagem = 'Erro na rede. Por favor, tente novamente mais tarde.'
            if (errorString.includes('status code 401'))
                mensagem = 'Email e/ou senha informados estão incorretos. Por gentileza confira seus dados e tente novamente!'
            Swal.fire({
                title: 'Erro ao realizar login!',
                text: mensagem,
                icon: 'error',
                confirmButtonColor: '#39CCBB',
                confirmButtonText: "Ok!",
            });
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, usuario, estaAutenticado }}>
            {children}
        </AuthContext.Provider>
    );
}