import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}

export default MyApp
