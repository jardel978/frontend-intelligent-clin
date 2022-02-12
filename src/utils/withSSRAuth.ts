import decode from "jwt-decode";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "services/errors/AuthTokenError";
import { validarPermissoesDeUsuario } from "./validarPermissoesDeUsuario";

type WithSSRAuthOptions = {
    permissions?: string[];
    role?: string;
}

export function withSSRAuth<P>(fun: GetServerSideProps<P>, options?: WithSSRAuthOptions): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const cookies = parseCookies(ctx);
        const token = cookies['intelligent.clin.token'];

        if (!token) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                }
            }
        }

        if (options) {
            const usuario = decode<{ permissions: string[], role: string }>(token);
            const { permissions, role } = options;

            const usuarioTemPermissoesValidas = validarPermissoesDeUsuario({
                usuario,
                permissions,
                role
            });

            if (!usuarioTemPermissoesValidas) {
                return {
                    redirect: {
                        destination: '/dashboard',
                        permanent: false,
                    }
                }
            }
        }

        try {
            return await fun(ctx);
        } catch (error) {
            if (error instanceof AuthTokenError) {
                destroyCookie(ctx, 'intelligent.clin.token');
                destroyCookie(ctx, 'intelligent.clin.refreshToken');

                return {
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }
    }
}