import Image from 'next/image';
import { ContainerImage } from './styles';

type ToggleTypeProps = {
    toggle: boolean;
    imagem: StaticImageData;
    width: string;
    height: string;
    position: string;
    top: string;
    rgt: string;
    bottom: string;
    left: string;
    delay: string;
}

export const ToggleImage = ({ toggle, imagem, width, height, position, top, rgt, bottom, left, delay }: ToggleTypeProps) => {
    return (
        <ContainerImage
            visivel={toggle}
            width={width}
            height={height}
            position={position}
            top={top}
            rgt={rgt}
            bottom={bottom}
            left={left}
            delay={delay}
        >
            <Image layout='fill' src={imagem} alt='' />
        </ContainerImage>
    )
};
