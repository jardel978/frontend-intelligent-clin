import styled from "styled-components";


interface ContainerImageProps {
    visivel: boolean;
    position: string;
    size: string;
    top: string;
    rgt: string;
    bottom: string;
    left: string;
    delay: string;
}

export const ContainerImage = styled.div<ContainerImageProps>`
    visibility: ${props => props.visivel ? 'visible' : 'hidden'};
    position: ${props => props.position};
    width: ${props => props.size};
    top: ${props => props.top};
    right: ${props => props.rgt};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    animation: exibir 3s infinite alternate;
    animation-delay: ${porps => porps.delay};
    border: 1px red solid;

    @keyframes exibir {
        from {
            opacity: 0;
            filter: blur(1);
        }
        to {
            opacity: 1;
            filter: blur(0);
        }
    }
`;
