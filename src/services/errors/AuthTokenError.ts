export class AuthTokenError extends Error {
    constructor() {
        super("Erro em token de autenticação");
    }
}