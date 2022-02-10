import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const BoxForm = styled.div`

    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    width: 100%;

    form {
        position: relative;
        left: 10%;
        transform: translateX(-10%);
        display: flex;
        width: 340px;
        height: 410px;
        padding: 1rem 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: .3rem;
        background-color: aqua;
        border: 1px red solid;

        a {
            position: absolute;
            top: 0;
            /* margin: 1rem; */
        }
        
        button {
            width: 150px;
            height: 57px;
            transition: filter .3s ease-in-out;
            border-radius: .3rem;
            
            &:hover {
                cursor: pointer;
                filter: brightness(.9);
            }
        }

        @media (max-width: 768px) {
            left: 50%;
            transform: translateX(-50%);
        } 
    }
    
    video {
        position: fixed;
        z-index: -1; 
        right: 0;
        width: 80%;
        height: 100%;
        border: 1px red solid;

        @media (max-width: 768px) {
            display: none;
        }     
    } 
`;

type BoxInputLoginProps = {
    temErros: boolean;
}

export const BoxInputLogin = styled.div<BoxInputLoginProps>`
    position: relative;
    padding: .5rem;
    margin: 27px;
    width: 90%;
    
    div {
        position: absolute;
        /* right: 0;  */
        margin-top: 3px;
        color: ${props => props.temErros ? 'red' : 'inherit'};
    }
    
    label {
        font-size: 1.2rem;
        position: absolute;
        top: -17px;
    }

    input, select {
        width: 100%;
        height: 40px;
        border-radius: .3rem;
        text-indent: 5px;
        border: ${props => props.temErros ? '1px red solid' : 'none'};
    }
`;