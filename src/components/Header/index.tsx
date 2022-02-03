import {  ContainerHeader } from './styles';

import Image from 'next/image';


import logoImg from 'assets/logo.svg';
import Link from 'next/link';
import { Navbar } from 'components/Navbar';

export const Header = () => {


    return (
        <ContainerHeader>
            <Link href={'/'} passHref>
                <a>
                    <Image src={logoImg} alt="Logo Intelligent Clin" />
                </a>
            </Link>
            <Navbar componentePai='header' />
        </ContainerHeader>
    )
};
