import styled from "styled-components";

export const ContainerUsarEmMinhaClinica = styled.div`
    position: relative;

    p {
        text-align: center;
        font-size: 1.5rem;
        margin: 2rem;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 600px;
    }
`;

export const BoxFormularioContato = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%);
    width: 40%;
    height: 60%;
    border-radius: .7rem;
    background: #68DABF;
    
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        
    }

    @media (max-width: 1089px) {
        top: 60%;
        height: 75%;
    }
    
    @media (max-width: 768px) {
        top: 30%;
        left: 50%;
        width: 350px;
        transform: translate(-50%); 
    }
`;

export const BotaoFormContato = styled.button`
    border-radius: .3rem;
    width: 150px;
    height: 60px;
    font-weight: 500;
    font-size: 1.2rem;
    /* color: var(--texto-btn); */
    border: none;
    margin: 1rem;
    transition: .3s ease-in-out;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
        width: 110px;  
    }

    &:hover {
        filter: brightness(.9);
    }
`;