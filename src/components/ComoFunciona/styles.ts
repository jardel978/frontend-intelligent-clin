import styled from "styled-components";

export const ContainerComoFunciona = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    flex-flow: column wrap;
    margin-top: 2rem;
    background: linear-gradient(281.23deg, #39CCBB -15.56%, rgba(57, 204, 187, 0.697007) -5.27%, rgba(57, 204, 187, 0.510417) 1.75%, rgba(57, 204, 187, 0.261703) 16.36%, rgba(57, 204, 187, 0) 46.78%);
    backdrop-filter: blur(4px);
`;

export const ParagrafoComoFunciona = styled.p`
    font-size: 1.2rem;
    text-indent: 2rem;
    max-width: 800px;
    align-self: center;
    text-align: justify;
`;

export const BoxBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
`;

type BtnComoFuncionaProps = {
    ehSaibaMais: boolean;
}

export const BtnComoFunciona = styled.button<BtnComoFuncionaProps>`
    background-color: ${props => props.ehSaibaMais ? '#ACB6B5' : '#39CCBB'};
    border-radius: .3rem;
    width: 150px;
    height: 60px;
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--texto-btn);
    border: none;
    margin: 1rem;
    transition: .3s ease-in-out;
    
    @media (min-width: 769px) {
        margin: 3rem;
        width: 250px;  
        height: 75px;
    }

    &:hover {
        filter: brightness(.9);
    }
`;

export const IconeAnimado = styled.span`
    animation: rotacionar 5s linear infinite;

    @keyframes rotacionar {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
	    }
    }

`;