import 'bootstrap/dist/css/bootstrap.min.css';
import './global-styles.css';
import '../assets/themes.scss';
import { TextProvider } from 'text-provider';
import content from '../common/content.json';
import { GlobalProvider } from '../store/GlobalProvider';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <TextProvider globalText={content}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </TextProvider>
  );
}
