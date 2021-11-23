import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global-styles.css';
import '../assets/themes.scss';
import { TextProvider } from 'text-provider';
import PropTypes from 'prop-types';
import content from '../common/content.json';
import { GlobalProvider } from '../store/GlobalProvider';
import { logPageViewToGA } from '../common/utils/ga';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        logPageViewToGA('/');
    }, []);

    return (
        <TextProvider globalText={content}>
            <GlobalProvider>
                <Component {...pageProps} />
            </GlobalProvider>
        </TextProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
    pageProps: PropTypes.object.isRequired,
};
