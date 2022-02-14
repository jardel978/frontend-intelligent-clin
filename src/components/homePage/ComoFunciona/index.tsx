import { BoxBtn, BtnComoFunciona, ContainerComoFunciona, IconeAnimado, ParagrafoComoFunciona } from './styles';

import { BsGearWideConnected } from 'react-icons/bs';

import { TituloSection } from '../TituloSection';

export const ComoFunciona = () => {

    return (
        <ContainerComoFunciona id='como-funciona'>
            <TituloSection texto='Como funciona'>
                <IconeAnimado as={BsGearWideConnected} />
            </TituloSection>
            <ParagrafoComoFunciona>
                A certificação de metodologias que nos auxiliam a lidar com a complexidade dos estudos efetuados promove a alavancagem do levantamento das variáveis envolvidas.
                A nível organizacional, a estrutura atual da organização aponta para a melhoria do remanejamento dos quadros funcionais. Pensando mais a longo prazo, o desafiador cenário globalizado é uma das consequências do investimento em reciclagem técnica. Gostaria de enfatizar que a revolução dos costumes desafia a capacidade de equalização do retorno esperado a longo prazo.
            </ParagrafoComoFunciona>

            <BoxBtn>
                <BtnComoFunciona ehSaibaMais={true}>
                    Saiba mais...
                </BtnComoFunciona>
                <BtnComoFunciona ehSaibaMais={false} >
                    Experimente gratuitamente
                </BtnComoFunciona>
            </BoxBtn>
        </ContainerComoFunciona>
    )
};
