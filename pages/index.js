import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';

export default function Root() {
  return (
    <>
      <Head>
        <title>Eric Ong</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Eric Ong" />
        <meta property="og:url" content="https://www.ericong.me/" />
        <meta property="og:image" content="/imgs/og-image.png" />
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