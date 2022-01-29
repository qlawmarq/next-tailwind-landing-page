import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { Landing } from '../../templates/Landing';
import { FAQ } from '../../templates/FAQ';
import { Prices } from '../../templates/Prices';

export const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat bg-gray-100">
        <Header />
        <Landing />
        <FAQ />
        <Prices />
        <Footer />
      </main>
    </>
  );
};
