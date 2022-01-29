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
    topInicial: string;
    leftInicial: string;
    topFinal: string;
    leftFinal: string;
}

export const ParagrafoBanner = styled.p<ParagrafoBannerProps>`
    position: relative;
    top: ${props => props.topInicial};
    left: ${props => props.leftInicial};
    font-size: 2.2rem;
    animation: ${props => props.visivel ? 'animartexto 6s infinite ease-out' : ''};
    

    @keyframes animartexto {
        0% {
            opacity: 0;
            filter: blur(1);
        } 40% {
            opacity: 1;
            filter: blur(0);
            top: ${props => props.topFinal};
            left: ${props => props.leftFinal};
        } 70% {
            opacity: 1;
            filter: blur(0);
            top: ${props => props.topFinal};
            left: ${props => props.leftFinal};
        }
        100% {
            opacity: 0;
            filter: blur(1);
        }
    }

    @media (max-width: 820px) {
        font-size: 1.5rem;
    }

    @media (max-width: 396px) {
        font-size: 1rem;
    }
`;