import { ContainerHeader } from './styles';

import logoImg from 'assets/logo.svg';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../Navbar';

export const HeaderHome = () => {

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
