import { ContainerQuemSomos, ParagrafoQuemSomos } from './styles';

import { BsFillInfoSquareFill } from 'react-icons/bs'

import { TituloSection } from '../TituloSection';

export const QuemSomos = () => {
    return (
        <ContainerQuemSomos id='quem-somos'>
            <TituloSection texto='Quem somos'>
                <BsFillInfoSquareFill color='#39CCBB' />
            </TituloSection>
            <ParagrafoQuemSomos>
                A certificação de metodologias que nos auxiliam a lidar com a complexidade dos estudos efetuados promove a alavancagem do levantamento das variáveis envolvidas.
            </ParagrafoQuemSomos>
            <ParagrafoQuemSomos>
                A nível organizacional, a estrutura atual da organização aponta para a melhoria do remanejamento dos quadros funcionais. Pensando mais a longo prazo, o desafiador cenário globalizado é uma das consequências do investimento em reciclagem técnica. Gostaria de enfatizar que a revolução dos costumes desafia a capacidade de equalização do retorno esperado a longo prazo.
            </ParagrafoQuemSomos>
        </ContainerQuemSomos>
    )
};
