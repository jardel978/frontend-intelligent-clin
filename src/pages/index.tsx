import { GlobalStyle } from '../styles/globals';

import { Banner } from 'components/Banner';
import { QuemSomos } from 'components/QuemSomos';
import { ComoFunciona } from 'components/ComoFunciona';
import { Duvidas } from 'components/Duvidas';
import { Planos } from 'components/Planos';
import { UsarEmMinhaClinica } from 'components/UsarEmMinhaClinica';
import { Footer } from 'components/Footer';

export default function Home() {
  return (
    <>
      <GlobalStyle />
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
