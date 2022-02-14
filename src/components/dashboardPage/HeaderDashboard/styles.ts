import styled from "styled-components";

export const ContainerHeaderDashboard = styled.header`
    position: fixed;
    padding: .5rem 2rem;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--texto);
    background-color: var(--background);
    z-index: 10000;
    
    /* @media (max-width: 720px) {
        flex-direction: column;
    } */

`;

export const BoxUsuarioHeaderDashboard = styled.div`
    /* border: red solid 1px; */
    h2 {
        margin-bottom: .3rem;
    }

    button {
        padding: .3rem;
        transition: filter .2s ease-in;

        & + button {
            margin-left: 1rem;
        }

        &:hover {
            filter: brightness(.9);
        }
    }
`;