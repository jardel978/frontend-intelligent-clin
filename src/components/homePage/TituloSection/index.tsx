import React, { cloneElement, ReactElement } from 'react';
import { Titulo } from './styles';

type TituloSectionProps = {
    children: ReactElement;
    texto: string;
}

export const TituloSection = ({ children, texto }: TituloSectionProps) => {
    return (
        <Titulo>
            {cloneElement(children)}
            <span>{texto}</span>
        </Titulo>
    )
};
