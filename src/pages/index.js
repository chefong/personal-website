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
        <title>Eric Ong</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta property="og:title" content="Eric Ong" />
        <meta property="og:url" content="https://www.ericong.me/" />
        <meta property="og:image:secure_url" content="https://dl.dropboxusercontent.com/s/rv188kuaoog0mku/og-image.png" />
        <meta property="og:description" content="I’m an aspiring Software Engineer based in the SF Bay Area with a focus on full-stack web development." />
      </Head>
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