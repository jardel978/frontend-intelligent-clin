import { BotaoFormContato } from './styles';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { InputContato } from './InputContato';

interface FormValues {
    nome: string;
    empresa: string;
    email: string;
    telefone: string;
    sou: string;
}

export const FormContato: React.FC<{}> = () => {

    const initialValues: FormValues = {
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        sou: '',
    };

    // const telefoneRegExp = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    const telefoneRegExp = /^(\([1-9]{2}\))([9]{1})?([0-9]{4})-([0-9]{4})$/;


    const validarForm = Yup.object().shape({
        nome: Yup.string().required('Este campo é obrigatório.'),
        empresa: Yup.string().required('Este campo é obrigatório.'),
        email: Yup.string()
            .required('Este campo é obrigatório.')
            .email('Email inválido. Informe um email no formato: meuemail@gamil.com'),
        telefone: Yup.string()
            .required('Este campo é obrigatório.')
            .matches(telefoneRegExp, "Telefone inválido. Informe um número válido."),
        sou: Yup.string().required('O campo é obrigatório.'),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                // console.log({ values, actions });
                // alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
            validationSchema={validarForm}>
            {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                resetForm,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
                setFieldValue,
            }) => (

                <Form>
                    <InputContato
                        error={errors.nome} touched={touched.nome} nameInput='nome'
                        handleChange={handleChange} />
                    <InputContato
                        error={errors.empresa} touched={touched.empresa} nameInput='empresa'
                        handleChange={handleChange} />
                    <InputContato
                        error={errors.email} touched={touched.email} nameInput='email'
                        handleChange={handleChange} />
                    <InputContato
                        error={errors.telefone} touched={touched.telefone} nameInput='telefone'
                        handleChange={handleChange} setValue={setFieldValue} />
                    <InputContato
                        error={errors.sou} touched={touched.sou} nameInput='sou'
                        handleChange={handleChange} />
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <BotaoFormContato type="submit">Enviar</BotaoFormContato>
                        <BotaoFormContato type="reset" onClick={e => resetForm}>Limpar campos</BotaoFormContato>
                    </div>
                </Form>
            )}
        </Formik>
    )
};
