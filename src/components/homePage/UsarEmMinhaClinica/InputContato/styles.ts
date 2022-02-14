import styled from "styled-components";

type BoxInputContatoprops = {
    temErros: boolean;
}

export const BoxInputContato = styled.div<BoxInputContatoprops>`
    position: relative;
    padding: .5rem;
    margin: 5px;
    width: 90%;

    span {
        position: absolute;
        right: 0;
        bottom: -50%;
        transform: translateY(-50%);
        color: ${props => props.temErros ? 'red' : 'inherit'};
    }

    label {
        position: absolute;
        top: -50%;
        transform: translateY(50%);
    }

    input, select {
        width: 100%;
        height: 40px;
        border-radius: .3rem;
        border: ${props => props.temErros ? '1px red solid' : 'none'};
    }

    @media (min-width: 1038px) {
        width: 80%;
    }
`;