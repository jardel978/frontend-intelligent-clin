import Image from 'next/image';
import { ContainerImage } from './styles';

type ToggleTypeProps = {
    toggle: boolean;
    imagem: StaticImageData;
    size: string;
    position: string;
    top: string;
    rgt: string;
    bottom: string;
    left: string;
    delay: string;
}

export const ToggleImage = ({ toggle, imagem, size, position, top, rgt, bottom, left, delay }: ToggleTypeProps) => {
    return (
        <ContainerImage
            visivel={toggle}
            size={size}
            position={position}
            top={top}
            rgt={rgt}
            bottom={bottom}
            left={left}
            delay={delay}
        >
            <Image sizes={size} src={imagem} alt='' />
        </ContainerImage>
    )
};
