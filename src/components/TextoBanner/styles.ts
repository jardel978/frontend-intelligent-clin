import styled from "styled-components";

type ContainerTextoProps = {
    visivel: boolean
}

export const ContainerTexto = styled.div<ContainerTextoProps>`
    visibility: ${props => props.visivel ? 'visible' : 'hidden'};
    position: absolute;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translateY(-50%);
    `;

type ParagrafoBannerProps = {
    visivel: boolean;
    translateXInicial: string;
    translateYInicial: string;
    translateXFinal: string;
    translateYFinal: string;
}

export const ParagrafoBanner = styled.p<ParagrafoBannerProps>`
    animation: ${props => props.visivel ? 'animartexto 4s forwards' : ''};
    transform: translate(${props => props.translateXInicial}, ${props => props.translateYInicial});
    
    @keyframes animartexto {
        0% {
            opacity: 0;
            filter: blur(1);
        }
        100% {
            opacity: 1;
            filter: blur(0);
            transform: translate(${props => props.translateXFinal}, ${props => props.translateYFinal});
        }
    }
`;