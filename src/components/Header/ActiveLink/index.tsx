import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement, useEffect, useState } from 'react';

interface ActiveLinkProps extends LinkProps {/* estendendo LinkProps para que esse componete tenha esses dois atributos personalizados mais todos os demais nativos */
    children: ReactElement;
}

export const ActiveLink = ({ children, ...rest }: ActiveLinkProps) => {

    function handleEstaAtivo() {
        window.history.pushState("Object", "title", '/' + rest.href);
    }

    const { asPath } = useRouter();

    return (
        <Link {...rest}>
            {cloneElement(children, {
                onClick: handleEstaAtivo,
                estaAtivo: asPath === '/' + rest.href ? true : false,
            })}
        </Link>
    );
};
