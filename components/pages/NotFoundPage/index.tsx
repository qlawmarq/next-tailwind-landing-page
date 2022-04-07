import Head from 'next/head';
import { NotFound } from '../../templates/NotFound';
import { PageSEO } from '../../../lib/SEO';

export const NotFoundPage = () => {
  return (
    <>
      <PageSEO pageTitle='404 Not Found' description='404 Not Found' />
      <main className="font-montserrat">
        <NotFound />
      </main>
    </>
  );
};
