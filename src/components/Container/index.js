import { useState, useContext, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import useKeyPress from '~/common/hooks/useKeyPress';
import getQuote from '~/services/getQuote';
import { store } from '~/store/GlobalProvider';
import actions from '~/store/actions';
import colors from '~/common/constants/colors';
import gaEvents from '~/common/constants/gaEvents';

const baseToastOptions = {
    style: {
        padding: '16px',
        fontFamily: 'Greycliff',
        backgroundColor: '#303030',
        color: 'white',
    },
};

const toastMessages = {
    loading: { icon: '⌛' },
    success: { icon: '🤔' },
    error: { icon: '😕' },
};

function getDurationFromWords(content) {
    const words = content.split(' ');
    const numWords = words.length;

    return (numWords / 2) * 1000;
}

export default function Container({ children }) {
    const { state, dispatch } = useContext(store);
    const { theme } = state;
    const [toastDuration, setToastDuration] = useState(5000);

    const aboutSectionEl = useRef(null);
    const projectsSectionEl = useRef(null);
    const experiencesSectionEl = useRef(null);

    const navItems = [
        {
            to: 'about',
            num: '01.',
            name: 'About',
            clickEventId: gaEvents.ABOUT_NAV_CLICKED,
            ref: aboutSectionEl,
        },
        {
            to: 'projects',
            num: '02.',
            name: 'Projects',
            clickEventId: gaEvents.PROJECTS_NAV_CLICKED,
            ref: projectsSectionEl,
        },
        {
            to: 'experience',
            num: '03.',
            name: 'Experience',
            clickEventId: gaEvents.EXPERIENCE_NAV_CLICKED,
            ref: experiencesSectionEl,
        },
    ];

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
                    const {
                        data: { content },
                    } = response;
                    setToastDuration(getDurationFromWords(content));

                    return content;
                },
                error: "Couldn't get quote.",
            },
            toastMessages,
        );
    });

    const toastOptions = {
        ...baseToastOptions,
        duration: toastDuration,
    };

    return (
        <div className={classNames(styles.container, theme)}>
            <main>
                <Navigation navItems={navItems} />
                {children(
                    aboutSectionEl,
                    projectsSectionEl,
                    experiencesSectionEl,
                )}
                <Toaster toastOptions={toastOptions} position="bottom-center" />
            </main>
            <footer>
                <Footer />
            </footer>
            <style jsx global>
                {`
                    body {
                        background: ${colors[theme]};
                    }
                `}
            </style>
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
