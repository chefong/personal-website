import Head from 'next/head';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation/Navigation';
import Title from '../components/Title/Title';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';

export default function Root() {
  return (
    <>
      <Head>
        <title>Eric Ong</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta property="og:title" content="Eric Ong" />
        <meta property="og:url" content="https://www.ericong.me/" />
        <meta property="og:image" content="https://dl.dropboxusercontent.com/s/0asqccltefx00pd/og-image.png" />
      </Head>
      <main>
        <Navigation />
        <Title />
        <About />
        <Projects />  
        <Experience />
      </main>
      <footer>
      </footer>
      <style global jsx>{`
        body {
          background: #FFFEFB;
          font-family: "Geomanist";
        }

        hr {
          border: 1px solid #808080;
        }
      `}</style>
    </>
  )
}