import React from 'react';
import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { Footer } from '../../organisms/Footer';
import { ContactForm } from '../../templates/ContactForm';

export const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
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
