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
        <meta name="title" content="Eric Ong" />
        <meta name="description" content="I’m an aspiring Software Engineer based in the SF Bay Area with a focus on full-stack web development." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ericong.me/" />
        <meta property="og:title" content="Eric Ong" />
        <meta property="og:description" content="I’m an aspiring Software Engineer based in the SF Bay Area with a focus on full-stack web development." />
        <meta property="og:image" content="https://dl.dropboxusercontent.com/s/rv188kuaoog0mku/og-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ericong.me/" />
        <meta property="twitter:title" content="Eric Ong" />
        <meta property="twitter:description" content="I’m an aspiring Software Engineer based in the SF Bay Area with a focus on full-stack web development." />
        <meta property="twitter:image" content="https://dl.dropboxusercontent.com/s/rv188kuaoog0mku/og-image.png" />
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