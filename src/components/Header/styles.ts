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
