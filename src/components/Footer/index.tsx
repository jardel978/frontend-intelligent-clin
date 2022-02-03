import { Navbar } from 'components/Navbar';
import Link from 'next/link';
import { BoxIconsFooter, Container, Icon, ParagrafroFooter } from './styles';
import { FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare } from 'react-icons/fa';

export const Footer = () => {
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
