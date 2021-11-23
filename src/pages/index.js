import { NextSeo } from 'next-seo';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope,
    faFileAlt,
    faWind,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';
import config from '~/next-seo.config';
import Home from '~/components/Home';

library.add(fab, faEnvelope, faFileAlt, faPaperPlane, faWind, faSun, faMoon);

export default function Index() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Eric Ong</title>
            </Head>
            <NextSeo {...config} />
            <Home />
        </>
    );
}
