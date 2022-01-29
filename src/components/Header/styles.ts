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
    width: 65%;
    margin-right: .7rem;
    
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin-right: 1rem;
        margin: .4rem;
        font-size: 1.21rem;
        
        a {
            padding: 1rem;
        }

        &:hover {
            
            filter: brightness(.9);

            &::after {
                content: '';/* mesmo vazio é importante colocar */
                position: absolute;
                height: 3px;
                border-radius: 3px 3px 0 0; 
                width: 100%;
                bottom: .7rem;
                left: 0;
                background: var(--texto-titulos);
            }
        }
    }
    
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

export const BtnLogin = styled.li`
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