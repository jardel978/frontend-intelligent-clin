import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: var(--texto);

    @media (max-width: 720px) {
        flex-direction: column;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 65%;
    
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin-right: 1rem;
        margin: .4rem;
        
        a {
            padding: 1rem;
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