import { BannerPlanos, BoxPlanos, ContainerPlano, ContainerPlanos, DescricaoPlano, Paragrafo, ParagrafoBannerPlanos, ParagrafoDescricaoPlano, Valor } from "./styles";
import { TituloSection } from "components/TituloSection";
import { IoOptionsOutline } from 'react-icons/io5';
import Image from "next/image";
import { MotionAnimate } from 'react-motion-animate';

import planosImg from 'assets/images/planosBkg.png';
import { useEffect, useState } from "react";

export const Planos = () => {

    const [animar, setAnimar] = useState(true);

    const toggleAnimar = setTimeout(() => {
        setAnimar(!animar);
    }, 5000);

    useEffect(() => {
        toggleAnimar
    }, [animar]);


    return (
        <MotionAnimate animation='fadeInUp' reset={true}>
            <ContainerPlanos id="planos">
                <TituloSection texto="Planos">
                    <IoOptionsOutline />
                </TituloSection>

                <BannerPlanos>
                    <Image src={planosImg} layout="responsive" alt="Temos os melhores planos para voçê." />
                    <ParagrafoBannerPlanos
                        animar={animar}
                        style={{
                            top: '10%',
                            width: '25%',
                            height: '10%'
                        }}>
                        <p>Temos um plano ideal para você.</p>
                    </ParagrafoBannerPlanos>
                    <ParagrafoBannerPlanos
                        animar={animar}
                        style={{
                            top: '30%',
                            width: '45%',
                            height: '20%',
                        }}>
                        <p>Sem recursos desnecessários sua clínica é atendida</p>
                        <p> de acordo com o que necessita e ainda economiza com isso!</p>
                    </ParagrafoBannerPlanos>
                </BannerPlanos>
                <BoxPlanos>
                    <ContainerPlano>
                        <h3>Plano Premium I</h3>
                        <Paragrafo disable={false}>Até 2 profissionais</Paragrafo>
                        <Paragrafo disable={false}>Gerenciamento de até 100 pacientes</Paragrafo>
                        <Paragrafo disable={false}>Agendamentos</Paragrafo>
                        <Paragrafo disable={true}>Prontuários</Paragrafo>

                        <DescricaoPlano>
                            <Valor> por R$ 49,90 <span>mensais</span></Valor>
                            <ParagrafoDescricaoPlano>O plano Premiun I é ideal para clínicas com no máximo dois profissionais e que têm um volume de pacientes ainda moderado.</ParagrafoDescricaoPlano>
                        </DescricaoPlano>
                    </ContainerPlano>

                    <ContainerPlano>
                        <h3>Plano Premium II</h3>
                        <Paragrafo disable={false}>Até 5 profissionais</Paragrafo>
                        <Paragrafo disable={false}>Gerenciamento de até 500 pacientes</Paragrafo>
                        <Paragrafo disable={false}>Agendamentos</Paragrafo>
                        <Paragrafo disable={false}>Prontuários</Paragrafo>

                        <DescricaoPlano>
                            <Valor> por R$ 89,90 <span>mensais</span></Valor>
                            <ParagrafoDescricaoPlano>O plano Premiun II oferece suporte de gerenciamento de até 500 pacientes e disponibiliza o armazenamento de prontuários.</ParagrafoDescricaoPlano>
                        </DescricaoPlano>
                    </ContainerPlano>

                    <ContainerPlano>
                        <h3>Plano Premium III</h3>
                        <Paragrafo disable={false}>Até 5 profissionais</Paragrafo>
                        <Paragrafo disable={false}>Gerenciamento ILIMITADO de pacientes</Paragrafo>
                        <Paragrafo disable={false}>Agendamentos</Paragrafo>
                        <Paragrafo disable={false}>Prontuários</Paragrafo>

                        <DescricaoPlano>
                            <Valor> por R$ 129,90 <span>mensais</span></Valor>
                            <ParagrafoDescricaoPlano>O plano Premiun III é ideal para clínicas com volume maior de profissionais e pacientes.</ParagrafoDescricaoPlano>
                        </DescricaoPlano>
                    </ContainerPlano>
                </BoxPlanos >
            </ContainerPlanos>
        </MotionAnimate>
    )
}