import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Title from '../Title/Title';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import useKeyPress from '../../shared/hooks/useKeyPress';
import getQuote from '../../services/getQuote';
import toast, { Toaster } from 'react-hot-toast';
import styles from './Body.module.scss';

const ONE_SECOND = 1000;

function getDurationFromWords(content) {
  const words = content.split(" ");
  const numWords = words.length;

  return (numWords / 2) * ONE_SECOND;
}

export default function Body() {
  const [theme, setTheme] = useState('light');
  const [toastDuration, setToastDuration] = useState(5000);

  useKeyPress('q', () => {
    toast.dismiss();
    toast.promise(
      getQuote(),
      {
        loading: 'Getting quote...',
        success: (response) => {
          const { data: { content } } = response;
          setToastDuration(getDurationFromWords(content));

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

  const handleThemeChange = checked => {
    checked
      ? setTheme('dark')
      : setTheme('light');
  };

  return (
    <body className={`${styles.body} ${theme}`}>
      <main>
        <Navigation onThemeChange={handleThemeChange} isDarkModeOn={theme === 'dark'} />
        <Title />
        <About />
        <Projects />
        <Experience theme={theme} />
        <Toaster
          toastOptions={{
            style: {
              padding: '16px',
              fontFamily: 'Geomanist',
              backgroundColor: '#303030',
              color: 'white',
            },
            duration: toastDuration,
          }}
          position="bottom-center"
        />
      </main>
      <footer>
        <Footer />
      </footer>
      <style jsx global>{`
        body {
          background: ${theme === "light" ? "#fffefb" : "#222222"};
        }
      `}</style>
    </body>
  )
}