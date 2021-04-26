import 'bootstrap/dist/css/bootstrap.min.css';
import './global-styles.css';
import '../assets/themes.scss';
import { GlobalProvider } from '../store/GlobalProvider';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}