import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { TermsConditions } from '../../templates/TermsConditions';

export const TermsConditionsPage = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat">
        <Header />
        <TermsConditions />
        <Footer />
      </main>
    </>
  );
};
