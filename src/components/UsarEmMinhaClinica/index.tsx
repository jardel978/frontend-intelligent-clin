import { BoxFormularioContato, ContainerUsarEmMinhaClinica } from "./styles";
import { TituloSection } from "components/TituloSection";
import Image from "next/image";
import { GiArcheryTarget } from "react-icons/gi";
import formImg from 'assets/images/image5.png';

export const UsarEmMinhaClinica = () => {
    return (
        <ContainerUsarEmMinhaClinica id="usar-em-minha-clinica">
            <TituloSection texto="Usar em minha clínica">
                <GiArcheryTarget />
            </TituloSection>
            <p>Preencha o formulário e nossa equipe entrará em contato imediatamente.</p>
            <Image src={formImg} alt="Homem de jaleco sorrindo." />

            <BoxFormularioContato>

            </BoxFormularioContato>
        </ContainerUsarEmMinhaClinica>
    )
};
