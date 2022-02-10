import { GlobalStyle } from '../styles/globals';

import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { QuemSomos } from 'components/QuemSomos';
import { ComoFunciona } from 'components/ComoFunciona';
import { Duvidas } from 'components/Duvidas';
import { Planos } from 'components/Planos';
import dynamic from 'next/dynamic';

const UsarEmMinhaClinica = dynamic(
  () => import('components/UsarEmMinhaClinica').then((mod) => mod.UsarEmMinhaClinica),
  { ssr: false }
);
import { Footer } from 'components/Footer';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <main>
        <QuemSomos />
        <ComoFunciona />
        <Duvidas />
        <Planos />
        <UsarEmMinhaClinica />
      </main>
      <Footer />
    </>
  )
}
