import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { CTA } from '../../templates/CTA';
import { FAQ } from '../../templates/FAQ';
import { Prices } from '../../templates/Prices';
import { Features } from '../../templates/Features';

export const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Business Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat bg-gray-100">
        <Header />
        <CTA />
        <Features />
        <FAQ />
        <Prices />
        <Footer />
      </main>
    </>
  );
};
