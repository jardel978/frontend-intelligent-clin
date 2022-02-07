import { Field } from 'formik';
import { mask, unMask } from 'remask';
import { BoxInputContato } from './styles';

type InputContatoProps = {
    error: string;
    touched: boolean;
    nameInput: string;
    setValue?: Function;
    handleChange: Function;
}


export const InputContato = ({ error, touched, nameInput, handleChange, setValue, ...props }: InputContatoProps) => {

    const mascaraTelefone = [
        '(99)9999-9999',
        '(99)99999-9999'
    ];

    function handleMask(e) {
        let valorOriginal = unMask(e.target.value);
        setValue(nameInput, mask(valorOriginal, mascaraTelefone));
    }

    return (
        <BoxInputContato temErros={error ? true : false}>
            <label htmlFor={nameInput}>{nameInput.replace(nameInput[0], nameInput[0].toUpperCase())}:</label>
            {nameInput === 'telefone' &&
                <Field
                    id={nameInput}
                    name={nameInput}
                    placehorder='Fixo ou Móvel'
                    onChange={e => { handleChange(e); handleMask(e) }}
                />
            }
            {nameInput === 'sou' &&
                <Field as="select" name={nameInput}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </Field>
            }
            {nameInput !== 'sou' && nameInput !== 'telefone' &&
                <Field id={nameInput} name={nameInput} placehorder='João Silva' />
            }
            {error && touched && <span>{error}</span>}
        </BoxInputContato>

    )
};

