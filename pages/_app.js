import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css';

import { initGA } from '../utils/analytics';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
