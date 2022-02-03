import styled from "styled-components";

export const ContainerUsarEmMinhaClinica = styled.div`
    position: relative;

    p {
        text-align: center;
        font-size: 1.5rem;
        margin: 2rem;
    }
`;

export const BoxFormularioContato = styled.div`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%);
    width: 40%;
    height: 60%;
    border: 1px red solid;

    @media (max-width: 767px) {

    }
`;