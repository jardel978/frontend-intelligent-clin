import styled from "styled-components";


interface ContainerImageProps {
    visivel: boolean;
    position: string;
    width: string;
    height: string;
    top: string;
    rgt: string;
    bottom: string;
    left: string;
    delay: string;
}

export const ContainerImage = styled.div<ContainerImageProps>`
    visibility: ${props => props.visivel ? 'visible' : 'hidden'};
    position: ${props => props.position};
    width: ${props => props.width};
    height: ${props => props.height};
    top: ${props => props.top};
    right: ${props => props.rgt};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    animation: exibir 6s infinite; 
    animation-delay: ${porps => porps.delay};

    @keyframes exibir {
        0% {
            opacity: 0;
            filter: blur(1);
        }
        50% {
            opacity: 1;
            filter: blur(0);
        }
        100% {
            opacity: 0;
            filter: blur(1);
        }
    }
`;
