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
    }, 9600);

    useEffect(() => {
        toggleAnimar
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        animationDelay={0.2}
                        style={{
                            top: '10%',
                            width: 'max-content',
                            height: 'max-content'
                        }}>
                        <p>Temos um plano ideal para você.</p>
                    </ParagrafoBannerPlanos>
                    <ParagrafoBannerPlanos
                        animar={animar}
                        animationDelay={3.2}
                        style={{
                            top: '30%',
                            width: 'max-content',
                            height: 'max-content',
                        }}>
                        <p>Sem recursos desnecessários sua clínica é atendida</p>
                    </ParagrafoBannerPlanos>
                    <ParagrafoBannerPlanos
                        animar={animar}
                        animationDelay={6.2}
                        style={{
                            top: '40%',
                            width: 'max-content',
                            height: 'max-content',
                            marginTop: '5px',
                        }}>
                        <p>de acordo com o que necessita e ainda economiza com isso!</p>
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