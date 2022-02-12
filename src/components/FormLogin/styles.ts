import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: rgb(44, 88, 109);
`;

export const BoxForm = styled.div`

    display: flex;
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
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(10px);
        --webkit-backdrop-filter: blur(10px);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        z-index: 2;
        color:#254040;

        a {
            position: absolute;
            top: 0;
            transform: translateY(-7px);
            background-color: rgb(255, 255, 255);
            width: 100%;
            height: 16%;
            text-align: center;
            border-radius: .3rem .3rem 0 0;
        }
        
        button {
            width: 150px;
            height: 57px;
            transition: filter .3s ease-in-out;
            border: none;
            border-radius: .3rem;
            background: #39CCBB;
            font-weight: 500;
            font-size: 1.4rem;

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
        z-index: 1; 
        right: 0;
        width: 87%;
        transform: translateX(90px);
        height: 100%;
        animation: surgir 2s ease-in;

        @keyframes surgir {
            from {
                width: 0;
                opacity: 0;
            } to {
                width: 87%;
                opacity: 1;
            }
        }

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
        margin-top: 3px;
        color: ${props => props.temErros ? 'rgb(180, 10, 20)' : 'inherit'};
        background: rgba(255, 255, 255, 0.3);
        padding: .1rem .5rem;
        border-radius: 0 .7rem .7rem;
        font-weight: 500;
        font-size: 1.05rem;
    }
    
    label {
        font-size: 1.2rem;
        font-weight: 500;
        position: absolute;
        top: -17px;
    }

    input {
        width: 100%;
        height: 40px;
        border-radius: .3rem;
        text-indent: 5px;
        border: ${props => props.temErros ? '1px rgb(180, 10, 20) solid' : 'none'};
        background: rgba(255, 255, 255, 0.3);
        font-size: 1.1rem;

        &:focus {
            outline-width: 0px;
        }
    }
`;