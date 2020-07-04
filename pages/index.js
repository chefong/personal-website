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
      </Head>
      <main>
        <Navigation />
        <Home />
        <Footer />
      </main>
    </>
  )
}