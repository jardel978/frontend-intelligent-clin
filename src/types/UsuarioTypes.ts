export type UsuarioAuthType = {
    email: string;
    permissions: string[];
    role: string;
};

export type UsuarioModel = {
    id: number,
    nome: string;
    sobrenome: string;
    cpf: string;
    dataCadastro: string;
    email: string;
    telefone: string;
    cargo: string
}