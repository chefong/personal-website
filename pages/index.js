import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import { aboutText } from '../content';

const ogImage = require("../public/imgs/og-image.png");

export default function Root() {
  return (
    <>
      <Head>
        <title>Eric Ong</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta property="og:title" content="Eric Ong" />
        <meta property="og:description" content={`${aboutText.greetings} ${aboutText.greetingsSub1} ${aboutText.greetingsSub2}`} />
        <meta property="og:url" content="https://www.ericong.me/" />
        <meta property="og:image" content="../public/imgs/og-image.png" />
      </Head>
      <main>
        <Navigation />
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
      <style jsx global>{`
        body {
          font-size: 1em;
        }
      `}</style>
    </>
  )
}