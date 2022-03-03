import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { PrivacyPolicy } from '../../templates/PrivacyPolicy';
import { useLocale } from '../../../hooks/useLocale';

export const PrivacyPolicyPage = () => {
  const { t } = useLocale();
  return (
    <>
      <Head>
        <title>{t.PrivacyPolicyPage.title}</title>
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
