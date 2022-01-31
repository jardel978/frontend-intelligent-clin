import React, { cloneElement, ReactChild, ReactComponentElement, ReactElement } from 'react';
import { IconType } from 'react-icons';
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
