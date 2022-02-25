import React, { useEffect } from 'react';
import Head from 'next/head';
import { Header } from '../../organisms/Header';
import { ContactForm } from '../../templates/ContactForm';

export const ContactPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat">
        <Header />
        <ContactForm />
      </main>
    </>
  );
};
