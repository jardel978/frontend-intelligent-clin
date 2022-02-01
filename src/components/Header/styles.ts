import styled from "styled-components";

export const ContainerHeader = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .6rem;
    color: var(--texto);
    background-color: var(--background);
    z-index: 10000;
    
    @media (max-width: 720px) {
        flex-direction: column;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin-right: .7rem;
    
    @media (max-width: 1255px) {
        width: 80%;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 720px) {
        width: 100%;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;

type AncoraAtivoProps = {
    estaAtivo: boolean;
    
}

export const AncoraAtivo = styled.a<AncoraAtivoProps>`
    position: relative;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-right: 1rem;
    margin: .4rem;
    font-size: 1.21rem;
    
    &:hover {
        
        filter: brightness(.9);
        cursor: pointer;

        &::after {
            content: '';
            position: absolute;
            height: 2px;
            border-radius: 3px 3px 0 0; 
            width: 100%;
            bottom: .7rem;
            left: 0;
            background: var(--texto-titulos);
            animation: sublinhar .3s ease-in-out;

            @keyframes sublinhar {
                0% {
                   transform: scaleX(0);
                } 100% {
                    transform: scaleX(1);
                }
            }
        }
    }

    &${props => props.estaAtivo ? '::after' : 'none'} {
        content: '';
        position: absolute;
        height: 2px;
        border-radius: 3px 3px 0 0; 
        width: 100%;
        bottom: .7rem;
        left: 0;
        background: var(--texto-titulos);
    }

`;

export const BtnLogin = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 3rem;
    border-radius: .3rem;
    background-color: var(--texto-titulos);
    transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1);
    /* color: #E0E5E5; */

    &:hover {
        cursor: pointer;
        filter: brightness(.9);
    }
`;