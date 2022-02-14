import styled from "styled-components";

export const Titulo = styled.h2`
    display: flex;
    align-items: center;
    position: relative;
    color: var(--texto-titulos);
    margin: 2rem;

     &::after {
        content: '';
        position: absolute;
        height: 2px;
        border-radius: 3px 3px 0 0; 
        width: 220px;
        top: 30px;
        left: 100px;
        background: var(--texto-titulos);
        
        @media (min-width: 768px) {
            width: 400px;
            left: 120px;
            top: 32px;
        }
    }

    span {
        margin-left: 10px;
    }
`;