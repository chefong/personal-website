import { useState, useContext } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import useKeyPress from '../../common/hooks/useKeyPress';
import getQuote from '../../services/getQuote';
import toast, { Toaster } from 'react-hot-toast';
import styles from './Body.module.scss';
import Particles from 'react-particles-js';
import { themeColors, toastOptions, particlesParams } from '../../common/constants';
import { store } from '../../store/GlobalProvider';

function getDurationFromWords(content) {
  const words = content.split(" ");
  const numWords = words.length;

  return (numWords / 2) * 1000;
}

export default function Body({ children }) {
  const { state } = useContext(store);
  const { theme } = state;
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

  return (
    <body className={`${styles.body} ${theme}`}>
      {theme === 'dark' && (
        <Particles
          canvasClassName={styles.particles}
          params={particlesParams}
        />
      )}
      <main>
        <Navigation />
        {children}
        <Toaster toastOptions={{ ...toastOptions, duration: toastDuration }} position="bottom-center" />
      </main>
      <footer>
        <Footer />
      </footer>
      <style jsx global>{`
        body {
          background: ${themeColors[theme]};
        }
      `}</style>
    </body>
  )
}
