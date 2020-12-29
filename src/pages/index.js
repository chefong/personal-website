import { NextSeo } from 'next-seo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { TextProvider } from "text-provider";
import strings from '../shared/content.json';
import config from '../next-seo.config';
import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Title from '../sections/Title/Title';
import About from '../sections/About/About';
import Experience from '../sections/Experience/Experience';
import Projects from '../sections/Projects/Projects';
import useKeyPress from '../shared/hooks/useKeyPress';
import getQuote from '../services/getQuote';
import toast, { Toaster } from 'react-hot-toast';

library.add(fab, faEnvelope, faFileAlt, faPaperPlane);

const toasterProps = {
  toastOptions: {
    style: {
      padding: '16px',
      fontFamily: 'Geomanist',
      backgroundColor: '#303030',
      color: 'white',
    },
    duration: 5000,
  },
  position: 'bottom-center',
};

export default function Root() {
  useKeyPress('q', () => {
    toast.promise(
      getQuote(),
      {
        loading: 'Getting quote...',
        success: (response) => {
          const { data: { content } } = response;
          return content;
        },
        error: 'Couldn\'nt get quote.',
      },
      {
        loading: { icon: '⌛' },
        success: { icon: '🤔' },
        error: { icon: '😕' },
      },
    );
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Eric Ong</title>
      </Head>
      <NextSeo {...config} />
      <TextProvider globalText={strings}>
        <main>
          <Navigation />
          <Title />
          <About />
          <Projects />
          <Experience />
          <Toaster {...toasterProps} />
        </main>
        <footer>
          <Footer />
        </footer>
      </TextProvider>
      <style global jsx>{`
        body {
          background: #fffefb;
          font-family: "Geomanist";
        }

        main {
          max-width: 1600px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}