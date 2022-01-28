import Head from 'next/head';
import { LP } from '../components/templates/lp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LP />
    </>
  );
}
