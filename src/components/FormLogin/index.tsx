import { BoxForm, BoxInputLogin, ContainerLogin } from 'components/FormLogin/styles';
import Image from 'next/image';
import Link from 'next/link';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import logoImg from 'assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';
import { withSSRGuest } from 'utils/withSSRGuest';

type InitialValuesTypes = {
    email: string;
    senha: string;
}

export const FormLogin: React.FC<{}> = () => {

    const initialValues: InitialValuesTypes = {
        email: '',
        senha: '',
    };

    const { signIn } = useContext(AuthContext);

    const validarForm = Yup.object().shape({
        email: Yup.string()
            .required('Este campo é obrigatório.')
            .email('Email inválido. Informe um email no formato: meuemail@gmail.com'),
        senha: Yup.string()
            .required('Por favor informe sua senha')
            .min(6, 'Sua senha deve ter no mínimo 6 dígitos'),
    });

    async function handleSubmit(values: InitialValuesTypes) {
        await signIn(values);
    }

    return (
        <ContainerLogin>
            <BoxForm>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        handleSubmit(values);
                        actions.setSubmitting(false);
                    }}
                    validationSchema={validarForm}
                >
                    {({
                        touched,
                        errors,
                        isSubmitting,
                    }) => (

                        <Form>
                            <Link href={'/'} passHref>
                                <a>
                                    <Image src={logoImg} width={170} alt="Logo Intelligent Clin" />
                                </a>
                            </Link>
                            <BoxInputLogin temErros={errors.email ? true : false}>
                                <label htmlFor='email'>Email:</label>
                                <Field type='email' id='email' name='email' placehorder='meuemail@gamil.com' />
                                {errors.email && touched.email && <div>{errors.email}</div>}
                            </BoxInputLogin>

                            <BoxInputLogin temErros={errors.senha ? true : false}>
                                <label htmlFor='senha'>Senha:</label>
                                <Field id='senha' type='password' name='senha' />
                                {errors.senha && touched.senha && <div>{errors.senha}</div>}
                            </BoxInputLogin>

                            <button type="submit" disabled={isSubmitting}>
                                Entrar
                            </button>
                        </Form>
                    )}
                </Formik>

                <video autoPlay loop muted >
                    <source src={require("assets/videos/bkgLogin.mp4")} type="video/mp4" />
                </video>

            </BoxForm>
        </ContainerLogin>
    )
};

export const getServerSideProps = withSSRGuest(async (ctx) => {
    return {
        props: {}
    }
});
