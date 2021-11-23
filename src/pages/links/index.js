import Head from 'next/head';
import data from './data.json';
import Links from '~/components/Links';
import Page from '~/components/Page';

const { links } = data;

export default function LinksPage() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Eric Ong</title>
            </Head>
            <Page>
                <Links links={links} />
            </Page>
            <style jsx global>
                {`
                    body {
                        background: linear-gradient(90deg, #1488cc, #2b32b2);
                    }
                `}
            </style>
        </>
    );
}
