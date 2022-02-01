import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement, useEffect, useState } from 'react';

interface ActiveLinkProps extends LinkProps {/* estendendo LinkProps para que esse componete tenha esses dois atributos personalizados mais todos os demais nativos */
    children: ReactElement;
    setLocation: Function;
}

export const ActiveLink = ({ children, setLocation, ...rest }: ActiveLinkProps) => {

    // const [linkAtivo, setLinkAtivo] = useState(false);

    function handleEstaAtivo() {
        window.history.pushState("Object", "title", '/' + rest.href);
        const location = window.location.href;
        setLocation(location)
    }

    const { asPath } = useRouter();

    // useEffect(() => {
    // const location = window.location.href;
    // const pathAtualizado = '#' + location.substring(location.indexOf('#') + 1);
    //     if (pathAtualizado === rest.href)
    //         setLinkAtivo(true);
    //     else
    //         setLinkAtivo(false);

    //     console.log(pathAtualizado);
    //     console.log(rest.href);
    // }, [asPath, rest.href]);


    return (
        <Link {...rest}>
            {cloneElement(children, {
                onClick: handleEstaAtivo,
                estaAtivo: asPath === '/' + rest.href ? true : false,
            })}
        </Link>
    );
};
