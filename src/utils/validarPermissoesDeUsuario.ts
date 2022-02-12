
type UsuarioPermissoes = {
    permissions: string[];
    role: string;
}

type ValidarPermissoesDeUsuarioParams = {
    usuario?: UsuarioPermissoes;
    permissions?: string;
    role?: string;
}

export function validarPermissoesDeUsuario({ usuario, permissions = [], role = '' }) {
    if (permissions?.length > 0) {
        const possuiTodasPermissoes = permissions.every(permission => {
            return usuario?.permissions.includes(permission)
        });

        if (!possuiTodasPermissoes) {
            return false;
        }

        if (role) {
            const possuiRole = role === usuario?.role;

            if (!possuiRole) {
                return false;
            }
        }

        return true;
    }
}