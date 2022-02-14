import axios, { AxiosError } from 'axios';
import { signOut } from 'contexts/AuthContext';
import { GetServerSidePropsContext } from 'next';
import { parseCookies, setCookie } from 'nookies';
import { AuthTokenError } from './errors/AuthTokenError';

type FilaSolicitacoesComFalhasType = {
    onSuccess: (token: string) => void;
    onFailure: (error: AxiosError) => void;
}
type Context = GetServerSidePropsContext | undefined;

let tokenEstaAtualizado = false;
let filaSolicitacoesComFalhas = Array<FilaSolicitacoesComFalhasType>();

export function setupApiClient(ctx: Context = undefined) {

    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:8080',
        // baseURL: 'https://intelligent-clin.herokuapp.com/',
        headers: {
            Authorization: `Bearer ${cookies['intelligent.clin.token']}`
        }
    });

    api.interceptors.response.use(response => {
        return response
    }, (error: AxiosError) => {
        if (error.response?.status === 403) {
            if (error.response?.data.message === 'token expirado') {
                cookies = parseCookies(ctx);

                const { 'intelligent.clin.refreshToken': refreshToken } = cookies;
                const originalConfig = error.config;

                if (!tokenEstaAtualizado) {
                    tokenEstaAtualizado = true;
                    let config = {
                        headers: {
                            'Authorization': `Bearer ${refreshToken}`,
                        }
                    }
                    api.get('/usuarios/token/refresh', config)
                        .then(response => {
                            const { token, refreshToken } = response.data;

                            setCookie(ctx, 'intelligent.clin.token', token, {
                                maxAge: 60 * 60 * 24 * 30 * 3,
                                path: '/',
                            });

                            setCookie(ctx, 'intelligent.clin.refreshToken', refreshToken, {
                                maxAge: 60 * 60 * 24 * 30 * 3,
                                path: '/',
                            });

                            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                            filaSolicitacoesComFalhas.forEach(request => request.onSuccess(token));
                            filaSolicitacoesComFalhas = [];
                        }).catch(error => {
                            filaSolicitacoesComFalhas.forEach(request => request.onFailure(error));
                            filaSolicitacoesComFalhas = [];

                            if (process.browser) {
                                signOut();
                            }
                        }).finally(() => { tokenEstaAtualizado = false });
                }
                return new Promise((resolve, reject) => {
                    filaSolicitacoesComFalhas.push({
                        onSuccess: (token: string) => {
                            if (!originalConfig?.headers) {
                                return;
                            }
                            originalConfig.headers['Authorization'] = `Bearer ${token}`;
                            resolve(api(originalConfig));
                        },
                        onFailure: (error: AxiosError) => {
                            reject(error);
                        }
                    })
                })
            } else {
                if (process.browser) {
                    signOut();
                } else {
                    return Promise.reject(new AuthTokenError())
                }
            }
        }
        return Promise.reject(error);
    });

    return api;
}