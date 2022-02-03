import Head from 'next/head';
import { NotFound } from '../../templates/NotFound';

export const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-montserrat">
        <NotFound />
      </main>
    </>
  );
};
