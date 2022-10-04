import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { TermsConditions } from '../../templates/TermsConditions';
import { useLocale } from '../../../hooks/useLocale';
import { NextSeo } from 'next-seo';

export const TermsConditionsPage = () => {
  const { t } = useLocale();
  return (
    <>
      <NextSeo
        title={t.TermsConditionsPage.title}
        description={t.TermsConditionsPage.description}
      />
      <main className="font-montserrat">
        <Header />
        <TermsConditions />
        <Footer />
      </main>
    </>
  );
};
