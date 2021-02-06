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
import Particles from 'react-particles-js';
import { themeColors } from '../../shared/constants';

const ONE_SECOND = 1000;
const particlesParams = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.02
    },
    "move": {
      "direction": "right",
      "speed": 0.05
    },
    "size": {
      "value": 1.25
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.05
      }
    }
  },
  "retina_detect": true
};

function getDurationFromWords(content) {
  const words = content.split(" ");
  const numWords = words.length;

  return (numWords / 2) * ONE_SECOND;
}

export default function Body() {
  let siteTheme;
  if (process.browser) siteTheme = localStorage.getItem('siteTheme');

  const [theme, setTheme] = useState(siteTheme || 'light');
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

  const handleThemeChange = theme => {
    switch (theme) {
      case 'dark':
        setTheme('dark');
        localStorage.setItem('siteTheme', 'dark');
        break;
      case 'tan':
        setTheme('tan');
        localStorage.setItem('siteTheme', 'tan');
        break;
      default:
        setTheme('light');
        localStorage.setItem('siteTheme', 'light');
        break;
    }
  };

  return (
    <body className={`${styles.body} ${theme}`}>
      {theme === 'dark' && (
        <Particles
          canvasClassName={styles.particles}
          params={particlesParams}
        />
      )}
      <main>
        <Navigation onThemeChange={handleThemeChange} />
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
          background: ${themeColors[theme]};
        }
      `}</style>
    </body>
  )
}