import { AncoraAtivo, BtnLogin, ContainerHeader, Nav } from './styles';

import Image from 'next/image';
import { ActiveLink } from './ActiveLink';

import signInImg from 'assets/icons/sign-in.svg';
// import signInImg from 'assets/icons/sign-in2.svg';
import logoImg from 'assets/logo.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {

    const [location, setLocation] = useState(window.location.href);

    useEffect(() => {
        console.log(location);
    }, [location]);


    return (
        <ContainerHeader>
            <Link href={'/'} passHref>
                <Image src={logoImg} alt="Logo Intelligent Clin" />
            </Link>
            <Nav>
                <ActiveLink setLocation={setLocation} href="#quem-somos">
                    <AncoraAtivo estaAtivo>Quem somos</AncoraAtivo>
                </ActiveLink>
                <ActiveLink setLocation={setLocation} href="#como-funciona">
                    <AncoraAtivo estaAtivo>Como funciona</AncoraAtivo>
                </ActiveLink>
                <ActiveLink setLocation={setLocation} href="#duvidas">
                    <AncoraAtivo estaAtivo>Dúvidas</AncoraAtivo>
                </ActiveLink>
                <ActiveLink setLocation={setLocation} href="#planos">
                    <AncoraAtivo estaAtivo>Planos</AncoraAtivo>
                </ActiveLink>
                <ActiveLink setLocation={setLocation} href="#usar-em-minha-clinica">
                    <AncoraAtivo estaAtivo>Usar em minha clínica</AncoraAtivo>
                </ActiveLink>
                <Link href='/' passHref>
                    <BtnLogin>
                        <Image width={30} height={30} src={signInImg} alt="Fazer login" />
                        <strong style={{ marginLeft: '.3rem' }}>Login</strong>
                    </BtnLogin>
                </Link>
            </Nav>
        </ContainerHeader>
    )
};
