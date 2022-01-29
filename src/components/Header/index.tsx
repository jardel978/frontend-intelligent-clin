import { Container, Nav } from './styles';

import Image from 'next/image';

import signInImg from 'assets/icons/sign-in.svg';
import logoImg from 'assets/logo.svg';

export const Header = () => {
    return (
        <Container>
            <Image src={logoImg} alt="Logo Intelligent Clin" />
            <Nav>
                <li>
                    <a href="#">Quem somos</a>
                </li>
                <li>
                    <a href="#">Como funciona</a>
                </li>
                <li>
                    <a href="#">Dúvidas</a>
                </li>
                <li>
                    <a href="#">Planos</a>
                </li>
                <li>
                    <a href="#">Usar em minha clínica</a>
                </li>
                <li>
                    <Image src={signInImg} alt="Fazer login" />
                    <a href="#">
                        Login
                    </a>
                </li>
            </Nav>
        </Container>
    )
};
