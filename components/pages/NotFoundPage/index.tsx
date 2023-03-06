import { NotFound } from '../../organisms/NotFound';
import { NextSeo } from 'next-seo';

export const NotFoundPage = () => {
  return (
    <>
      <NextSeo title="404 Not Found" description="404 Not Found" />
      <main className="font-montserrat">
        <NotFound />
      </main>
    </>
  );
};
