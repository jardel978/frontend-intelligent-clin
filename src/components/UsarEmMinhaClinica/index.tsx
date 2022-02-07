import { BoxFormularioContato, ContainerUsarEmMinhaClinica } from "./styles";
import { TituloSection } from "components/TituloSection";
import Image from "next/image";
import { GiArcheryTarget } from "react-icons/gi";
import formImg from 'assets/images/image5.png';
import { FormContato } from "./FormContato";
import { useState } from "react";

export const UsarEmMinhaClinica = () => {

    const [ehTelaTabletOuMaior, setEhTelaTabletOuMaior] = useState(true);

    document.body.onresize = () => {
        if (document.body.clientWidth <= 768)
            setEhTelaTabletOuMaior(false)
        else
            setEhTelaTabletOuMaior(true)
    };

    return (
        <ContainerUsarEmMinhaClinica id="usar-em-minha-clinica">
            <TituloSection texto="Usar em minha clínica">
                <GiArcheryTarget />
            </TituloSection>
            <p>Preencha o formulário e nossa equipe entrará em contato imediatamente.</p>
            {ehTelaTabletOuMaior &&
                <Image src={formImg} alt="Profissional de jaleco sorrindo." />}

            <BoxFormularioContato>
                <FormContato />
            </BoxFormularioContato>
        </ContainerUsarEmMinhaClinica>
    )
};
