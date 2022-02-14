import { BoxResposta, ContainerCardDuvida } from './styles';

import { BsPlusSquareDotted } from 'react-icons/bs';
import { BsPlusCircleDotted } from 'react-icons/bs';

import { useState } from 'react';

type CardDuvidaProps = {
    titulo: string;
    resposta: string
}

export const CardDuvida = ({ titulo, resposta }: CardDuvidaProps) => {

    const [expandir, setExpandir] = useState(false);

    return (
        <>
            <ContainerCardDuvida onClick={e => setExpandir(!expandir)} expandir={expandir} >
                <span>
                    <BsPlusCircleDotted color='#284949' size={40} />
                </span>
                <h3>{titulo}</h3>
            </ContainerCardDuvida>
            <BoxResposta expandir={expandir}>
                {resposta}
            </BoxResposta>
        </>
    )
};
