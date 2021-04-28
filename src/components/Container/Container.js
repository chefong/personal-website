import { useState, useContext, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import useKeyPress from '../../common/hooks/useKeyPress';
import getQuote from '../../services/getQuote';
import toast, { Toaster } from 'react-hot-toast';
import styles from './Container.module.scss';
import Particles from 'react-particles-js';
import { themeColors, toastOptions, particlesParams } from '../../common/constants';
import { store } from '../../store/GlobalProvider';
import actions from '../../store/actions';

function getDurationFromWords(content) {
  const words = content.split(" ");
  const numWords = words.length;

  return (numWords / 2) * 1000;
}

export default function Container({ children }) {
  const { state, dispatch } = useContext(store);
  const { theme } = state;
  const [toastDuration, setToastDuration] = useState(5000);

  useEffect(() => {
    const siteTheme = localStorage.getItem('siteTheme') || 'light';
    dispatch({ type: actions.SET_THEME, payload: siteTheme });
  }, []);

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
    <div className={`${styles.container} ${theme}`}>
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
    </div>
  )
}
