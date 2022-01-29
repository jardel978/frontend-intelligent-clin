import { ContainerTexto, ParagrafoBanner } from './styles';

type TextoBannerProps = {
    toggle: boolean;
}

export const TextoBanner = ({ toggle }: TextoBannerProps) => {
    return (
        <ContainerTexto visivel={toggle}>
            <ParagrafoBanner
                visivel={toggle}
                translateXInicial='-250px' translateYInicial='-10px'
                translateXFinal='-50px' translateYFinal='-10px'
            >
                Porque cuidar também
            </ParagrafoBanner>
            <ParagrafoBanner
                visivel={toggle}
                translateXInicial='250px' translateYInicial='10px'
                translateXFinal='50px' translateYFinal='10px'
            >
                é a base do nosso código!
            </ParagrafoBanner>
        </ContainerTexto >
    )
};
