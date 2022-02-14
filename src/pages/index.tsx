import { HeaderHome } from 'components/homePage/HeaderHome';
import { Banner } from 'components/homePage/Banner';
import { QuemSomos } from 'components/homePage/QuemSomos';
import { ComoFunciona } from 'components/homePage/ComoFunciona';
import { Duvidas } from 'components/homePage/Duvidas';
import { Planos } from 'components/homePage/Planos';
import dynamic from 'next/dynamic';

const UsarEmMinhaClinica = dynamic(
  () => import('components/homePage/UsarEmMinhaClinica').then((mod) => mod.UsarEmMinhaClinica),
  { ssr: false }
);
import { FooterHome } from 'components/homePage/FooterHome';

export default function Home() {
  return (
    <>
      <HeaderHome />
      <Banner />
      <main>
        <QuemSomos />
        <ComoFunciona />
        <Duvidas />
        <Planos />
        <UsarEmMinhaClinica />
      </main>
      <FooterHome />
    </>
  )
}
