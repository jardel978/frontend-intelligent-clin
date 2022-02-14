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
    animationDelay: number;
}

function removerVisibilidadeAnimacao(animar: boolean, tempoDelay: number) {
    if (animar) {
        setTimeout(() => {
            return true;
        }, tempoDelay * 1000 + 3000);
    } else
        return false;
}

export const ParagrafoBannerPlanos = styled.div<ParagrafoBannerPlanosProps>`
    position: absolute;
    left: 15%;
    font-size: 1.5rem;
    
    p {
        border-right: 1px #284949 solid;
        animation:${props => props.animar ? 
            `cursorTexto 500ms infinite normal steps(50), digitando 3.2s ${props.animationDelay}s normal steps(50) forwards` : 
                `cursorTexto 500ms infinite normal steps(50), retirarTexto ${props.animationDelay + 3}s normal forwards`};
        white-space: nowrap;
        overflow: hidden;
        margin: 5px;
        opacity: ${props => removerVisibilidadeAnimacao(props.animar, props.animationDelay) ?
            '1' : '0'
        };

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
                opacity: .3;
            } to {
                width: 100%;
                opacity: 1;
            }
        }

        @keyframes retirarTexto {
            0% {
                opacity: 1;
            } 95% {
                opacity: 0.5;
            } 100% {
                opacity: 0;
            }
        }
    }

    @media (max-width: 1124px) {
        font-size: 1.3rem;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 540px) {
        font-size: .8rem;
        font-weight: 500;
    }
`;

export const BoxPlanos = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 1rem;

    @media (max-width: 912px) {
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
    
    @media (max-width: 1014px) {
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