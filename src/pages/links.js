import Head from 'next/head';
import Links from '~/components/Links';
import Page from '~/components/Page';

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
