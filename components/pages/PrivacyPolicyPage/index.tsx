import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { PrivacyPolicy } from '../../templates/PrivacyPolicy';
import { useLocale } from '../../../hooks/useLocale';
import { PageSEO } from '../../../lib/SEO';

export const PrivacyPolicyPage = () => {
  const { t } = useLocale();
  return (
    <>
      <PageSEO pageTitle={t.PrivacyPolicyPage.title}  description={t.PrivacyPolicyPage.description}/>
      <main className="font-montserrat">
        <Header />
        <PrivacyPolicy />
        <Footer />
      </main>
    </>
  );
};
