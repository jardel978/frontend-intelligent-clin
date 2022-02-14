import { AuthProvider } from 'contexts/AuthContext';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services/queryClient';
import { GlobalStyle } from 'styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Head>
          <title>Intelligent Clin</title>
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default MyApp;
