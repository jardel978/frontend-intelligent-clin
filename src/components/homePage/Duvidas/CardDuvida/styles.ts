import styled from "styled-components";

type BoxRespostaPorps = {
    expandir: boolean;
}

export const ContainerCardDuvida = styled.article<BoxRespostaPorps>`
    display: grid;
    grid-template-columns: 0.1fr 1.9fr;
    align-items: center;
    justify-content: center;
    grid-gap: 15px;
    width: 90%;
    padding: 1rem;
    margin: .7rem;
    border-radius: .5rem;
    font-size: 1.2rem;
    background-color: ${props => props.expandir ? '#33CCBB' : '#C0E0CF'};
    align-self: center;

    h3 {
        font-size: 1.2rem;
    }

    span {
        transition: .5s ease-in-out;
        width: 40px;
        height: 40px;
        transform: ${props => props.expandir ? 'rotate(45deg)' : 'rotate(0);'};
    }

    &:hover {
        transition: .2s ease-in;
        filter: brightness(.95);
        cursor: pointer;
        text-decoration: underline;
        background-color: #33CCBB;
    }
`;


export const BoxResposta = styled.div<BoxRespostaPorps>`
    display: ${props => props.expandir ? 'block' : 'none'};
    animation: ${props => props.expandir ? 'mostarResposta .5s' : 'mostarResposta .5s reverse'};
    background-color: #33CCBB;
    transition: opacity 5s ease-in-out;
    padding: 1.7rem;
    margin-top: .2rem;
    margin-bottom: 1rem;
    width: 90%;
    font-size: 1.2rem;
    align-self: center;
    transform: translate(1rem);
    border-radius: 0 1.5rem 1.5rem;

    @keyframes mostarResposta {
        0% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
`;