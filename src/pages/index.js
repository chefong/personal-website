import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import Title from '../components/Title/Title';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import { NextSeo } from 'next-seo';

export default function Root() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Eric Ong</title>
      </Head>
      <NextSeo
        title="Eric Ong"
        description="I’m a Software Engineer based in the SF Bay Area with a focus on full-stack web development."
        openGraph={{
          type: "website",
          url: "https://www.ericong.me/",
          title: "Eric Ong",
          site_name: "Eric Ong",
          description: "I’m an aspiring Software Engineer based in the SF Bay Area with a focus on full-stack web development.",
          images: [{ url: "https://www.ericong.me/imgs/og-image.png" }]
        }}
      />
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