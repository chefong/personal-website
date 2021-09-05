import Head from 'next/head';
import Page from '../components/Page';
import Links from '../components/Links';

export default function LinksPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Eric Ong</title>
      </Head>
      <Page>
        <Links />
      </Page>
      <style jsx global>
        {`
        body {
          background: linear-gradient(90deg, #1488CC, #2B32B2);
        }
      `}
      </style>
    </>
  );
}
