import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { TermsConditions } from '../../templates/TermsConditions';
import { useLocale } from '../../../hooks/useLocale';

export const TermsConditionsPage = () => {
  const { t } = useLocale();
  return (
    <>
      <Head>
        <title>{t.TermsConditionsPage.title}</title>
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
