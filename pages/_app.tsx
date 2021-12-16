import '@/styles/main.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <ToastContainer theme='colored' closeOnClick pauseOnHover draggable={false} />
    </>
  );
}

export default MyApp;
