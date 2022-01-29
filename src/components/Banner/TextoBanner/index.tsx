import { ContainerTexto, ParagrafoBanner } from './styles';

type TextoBannerProps = {
    toggle: boolean;
}

export const TextoBanner = ({ toggle }: TextoBannerProps) => {
    return (
        <ContainerTexto visivel={toggle}>
            <ParagrafoBanner
                visivel={toggle}
                topInicial='-5%' leftInicial='-40%'
                topFinal='-2%' leftFinal='-10%'
            >
                Porque cuidar também
            </ParagrafoBanner>
            <ParagrafoBanner
                visivel={toggle}
                topInicial='5%' leftInicial='40%'
                topFinal='2%' leftFinal='10%'
            >
                é a base do nosso código!
            </ParagrafoBanner>
        </ContainerTexto >
    )
};
