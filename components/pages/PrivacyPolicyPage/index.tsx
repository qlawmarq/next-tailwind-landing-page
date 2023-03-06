import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { PrivacyPolicy } from '../../organisms/PrivacyPolicy';
import { useLocale } from '../../../hooks/useLocale';
import { NextSeo } from 'next-seo';

export const PrivacyPolicyPage = () => {
  const { t } = useLocale();
  return (
    <>
      <NextSeo
        title={t.PrivacyPolicyPage.title}
        description={t.PrivacyPolicyPage.description}
      />
      <main className="font-montserrat">
        <Header />
        <PrivacyPolicy />
        <Footer />
      </main>
    </>
  );
};
