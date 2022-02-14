import { BoxIconsFooter, Container, Icon, ParagrafroFooter } from './styles';

import { FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare } from 'react-icons/fa';

import { Navbar } from '../Navbar';
import Link from 'next/link';

export const FooterHome = () => {
    return (
        <Container>
            <Link href={'/'} passHref>
                <span>Voltar ao topo</span>
            </Link>
            <Navbar componentePai='footer' />
            <BoxIconsFooter>
                <Link href={'/'} passHref>
                    <Icon as={FaFacebookSquare}></Icon>
                </Link>
                <Link href={'/'} passHref>
                    <Icon as={FaWhatsappSquare}></Icon>
                </Link>
                <Link href={'/'} passHref>
                    <Icon as={FaInstagramSquare}></Icon>
                </Link>
            </BoxIconsFooter>
            <ParagrafroFooter>
                Inteligent Clin - Todos os direitos revervados.
            </ParagrafroFooter>
        </Container>
    )
};
