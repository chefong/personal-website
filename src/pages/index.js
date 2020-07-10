import { NextSeo } from 'next-seo';
import { config } from './next-seo.config';
import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import Title from '../components/Title/Title';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

export default function Root() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Eric Ong</title>
      </Head>
      <NextSeo {...config} />
      <main>
        <Navigation />
        <Title />
        <About />
        <Projects />  
        <Experience />
      </main>
      <footer>
        <Footer />
      </footer>
      <style global jsx>{`
        body {
          background: #fffefb;
          font-family: "Geomanist";
        }

        hr {
          border: 1px solid #808080;
        }
      `}</style>
    </>
  )
}