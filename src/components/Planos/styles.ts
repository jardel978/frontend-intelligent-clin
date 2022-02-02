import { type } from "os";
import styled from "styled-components";

export const ContainerPlanos = styled.section`
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin-top: 2rem;
    `;

export const BannerPlanos = styled.div`
    position: relative;
    width: 100%;
    margin-top: 1rem;
`;

type ParagrafoBannerPlanosProps = {
    animar: boolean;
}

export const ParagrafoBannerPlanos = styled.div<ParagrafoBannerPlanosProps>`
    position: absolute;
    left: 15%;
    font-size: 1.5rem;
    
    p {
        border-right: 1px #284949 solid;
        animation:${props => props.animar ? 
            'cursorTexto 500ms infinite normal, digitando 4s 1s infinite normal' : 
                'cursorTexto 500ms infinite normal'};
        white-space: nowrap;
        overflow: hidden;
        margin: 5px;

        @keyframes cursorTexto {
            from {
                border-right-color: #284949;
            } to {
                border-right-color: transparent;
            }
        }
        @keyframes digitando {
            from {
                width: 0%;
            } to {
                width: 100%;
            }
        }
    }
`;

export const BoxPlanos = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 1rem;

    @media (max-width: 820px) {
        flex-flow: column wrap;
    }
`;


export const ContainerPlano = styled.article`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column wrap;
    width: 350px;
    height: 540px;
    background: #B9E4CF;
    border-radius: .3rem;

    & + article {
        margin-left: 5rem;
    }
    
    h3 {
        margin-top: 1.5rem;
        font-size: 1.3rem;
    }    
    
    @media (max-width: 820px) {
        width: 340px;
        height: 530px;

        & + article {
            margin-top: 1.5rem;
            margin-left: 0;
        }
    }
`;

type ParagrafoProps = {
    disable: boolean;
}

export const Paragrafo = styled.p<ParagrafoProps>`
    opacity: ${props => props.disable ? '.6' : '1'};
    width: 80%;
    text-align: center;
    background: #E0F4EA;
    padding: .6rem;
    margin-top: 1.3rem;
    border-radius: .5rem;
    font-size: 1.2rem;
    transition: ease .2s;

    &:${props => props.disable ? '' : 'hover'} {
        filter: brightness(.9);
        transform: scale(1.01);
    }
`;

export const DescricaoPlano = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 1rem;
`;

export const Valor = styled.p`
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    
    span {
        font-size: 1.5rem;
    }
`;

export const ParagrafoDescricaoPlano = styled.p`
    width: 90%;
    text-align: center;
    font-size: 1.1rem;
`;