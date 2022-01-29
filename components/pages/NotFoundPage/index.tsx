import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { NotFound } from '../../templates/NotFound';

export const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat bg-gray-100">
        <NotFound />
        <Footer />
      </main>
    </>
  );
};
