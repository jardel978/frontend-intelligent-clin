import { UsuarioModel } from "types/UsuarioTypes";

import { HeaderDashboard } from "components/dashboardPage/HeaderDashboard";
import { AuthContext } from "contexts/AuthContext";
import Head from "next/head";
import { useContext } from "react";
import { setupApiClient } from "services/api";
import { withSSRAuth } from "utils/withSSRAuth";
import { useQuery } from "react-query";
import { api } from "services/apiClient";

type DashboardProps = {
    data: UsuarioModel
}

export default function Dashboard() {

    const { signOut } = useContext(AuthContext);

    const { data: usuario, isFetching } = useQuery<UsuarioModel>('usuarioLogado', async () => {
        const response = await api.get('/usuarios/permitAll/buscar-proprio-usuario');
        return response.data;
    })

    return (
        <>
            <Head>
                <title>Intelligent Clin | Dashboard</title>
            </Head>
            {usuario &&
                <HeaderDashboard usuario={usuario} signOut={signOut} isFetching={isFetching} />
            }
        </>

    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    // const response = await apiClient.get('/usuarios/me');
    return {
        props: {}
    }
})