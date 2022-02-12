import { AuthContext } from "contexts/AuthContext";
import Head from "next/head";
import { useContext } from "react";
import { setupApiClient } from "services/api";
import { withSSRAuth } from "utils/withSSRAuth";

export default function Dashboard() {

    const { usuario, signOut } = useContext(AuthContext);

    return (
        <>
            <Head>
                <title>Intelligent Clin | Dashboard</title>
            </Head>
            {usuario &&
                <div>
                    Dashboard
                    <button onClick={signOut}>Sair</button>
                </div>}
        </>

    );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const apiClient = setupApiClient(ctx);
    const response = await apiClient.get('/usuarios/me');
    console.log('usuario', response.data);

    return {
        props: {}
    }
})