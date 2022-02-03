import { AncoraAtivo, Nav } from './styles';
import { ActiveLink } from 'components/Navbar/ActiveLink';
import { BtnLogin } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import signInImg from 'assets/icons/sign-in.svg';
// import signInImg from 'assets/icons/sign-in2.svg';

type NavbarProps = {
    componentePai: string;
}

export const Navbar = ({ componentePai }: NavbarProps) => {

    return (
        <Nav componentePai={componentePai} >
            <ActiveLink href="#quem-somos">
                <AncoraAtivo estaAtivo>Quem somos</AncoraAtivo>
            </ActiveLink>
            <ActiveLink href="#como-funciona">
                <AncoraAtivo estaAtivo>Como funciona</AncoraAtivo>
            </ActiveLink>
            <ActiveLink href="#duvidas">
                <AncoraAtivo estaAtivo>Dúvidas</AncoraAtivo>
            </ActiveLink>
            <ActiveLink href="#planos">
                <AncoraAtivo estaAtivo>Planos</AncoraAtivo>
            </ActiveLink>
            <ActiveLink href="#usar-em-minha-clinica">
                <AncoraAtivo estaAtivo>Usar em minha clínica</AncoraAtivo>
            </ActiveLink>
            <Link href='/' passHref>
                {componentePai === 'header' ?
                    <BtnLogin>
                        <Image width={30} height={30} src={signInImg} alt="Fazer login" />
                        <strong style={{ marginLeft: '.3rem' }}>Login</strong>
                    </BtnLogin> :
                    <ActiveLink href="#usar-em-minha-clinica">
                        <AncoraAtivo estaAtivo>Login</AncoraAtivo>
                    </ActiveLink>
                }
            </Link>
        </Nav>
    )
};
