import { BtnLogin, ContainerHeader, Nav } from './styles';

import Image from 'next/image';

import signInImg from 'assets/icons/sign-in.svg';
// import signInImg from 'assets/icons/sign-in2.svg';
import logoImg from 'assets/logo.svg';

export const Header = () => {
    return (
        <ContainerHeader>
            <Image src={logoImg} alt="Logo Intelligent Clin" />
            <Nav>
                <li>
                    <a href="#quem-somos">Quem somos</a>
                </li>
                <li>
                    <a href="#como-funciona">Como funciona</a>
                </li>
                <li>
                    <a href="#duvidas">Dúvidas</a>
                </li>
                <li>
                    <a href="#">Planos</a>
                </li>
                <li>
                    <a href="#">Usar em minha clínica</a>
                </li>
                <BtnLogin>
                    <Image width={30} height={30} src={signInImg} alt="Fazer login" />
                    <strong style={{marginLeft: '.3rem'}}>Login</strong>
                </BtnLogin>
            </Nav>
        </ContainerHeader>
    )
};
