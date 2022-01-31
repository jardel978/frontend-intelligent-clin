import { GlobalStyle } from '../styles/globals';

import { Banner } from 'components/Banner';
import { QuemSomos } from 'components/QuemSomos';
import { ComoFunciona } from 'components/ComoFunciona';
import { Duvidas } from 'components/Duvidas';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <main>
        <QuemSomos />
        <ComoFunciona />
        <Duvidas />
      </main>
    </>
  )
}
