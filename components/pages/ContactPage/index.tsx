import React from 'react';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { ContactForm } from '../../templates/ContactForm';
import { useLocale } from '../../../hooks/useLocale';
import { PageSEO } from '../../../lib/SEO';
export const ContactPage = () => {
  const { t } = useLocale();
  return (
    <>
      <PageSEO pageTitle={t.ContactPage.title} description={t.ContactPage.description}/>
      <main className="font-montserrat">
        <Header />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};
