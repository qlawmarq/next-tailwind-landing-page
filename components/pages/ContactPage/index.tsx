import React from 'react';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { ContactForm } from '../../organisms/ContactForm';
import { useLocale } from '../../../hooks/useLocale';
import { NextSeo } from 'next-seo';
export const ContactPage = () => {
  const { t } = useLocale();
  return (
    <>
      <NextSeo
        title={t.ContactPage.title}
        description={t.ContactPage.description}
      />
      <main className="font-montserrat">
        <Header />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};
