import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { PrivacyPolicy } from '../../templates/PrivacyPolicy';

export const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat">
        <Header />
        <PrivacyPolicy />
        <Footer />
      </main>
    </>
  );
};
