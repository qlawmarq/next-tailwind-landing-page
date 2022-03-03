import React from 'react';
import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { ContactForm } from '../../templates/ContactForm';
import { useLocale } from '../../../hooks/useLocale';

export const ContactPage = () => {
  const { t } = useLocale();
  return (
    <>
      <Head>
        <title>{t.ContactPage.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat">
        <Header />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};
