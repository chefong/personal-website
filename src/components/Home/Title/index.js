import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'text-provider';
import Confetti from 'react-dom-confetti';
import Particles from 'react-particles-js';
import styles from './styles.module.scss';
import { store } from '~/store/GlobalProvider';
import Button from '~/components/Button';
import { logToGA } from '~/common/utils/ga';
import gaEvents from '~/common/constants/gaEvents';

const confettiConfig = {
    angle: 90,
    spread: '80',
    startVelocity: 35,
    elementCount: 30,
    dragFriction: 0.12,
    duration: 2500,
    stagger: 5,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const particlesParams = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 1500,
            },
        },
        line_linked: {
            enable: true,
            opacity: 0.02,
        },
        move: {
            direction: 'right',
            speed: 0.05,
        },
        size: {
            value: 1.25,
        },
        opacity: {
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
            },
        },
    },
    retina_detect: true,
};

export default function Title() {
    const [resumeHovered, setResumeHovered] = useState(false);
    const { state } = useContext(store);
    const { theme } = state;

    const handleResumeHoverIn = (e) => {
        e.preventDefault();
        setResumeHovered(true);
    };

    const handleResumeHoverOut = (e) => {
        e.preventDefault();
        setResumeHovered(false);
    };

    return (
        <section className={styles.section} data-testid="Title-container">
            {theme === 'dark' && (
                <Particles
                    canvasClassName={styles.particles}
                    params={particlesParams}
                />
            )}
            <div className={styles.content}>
                <h2 className={styles.subtitle}>
                    <FormattedMessage id="TITLE_GREETING" />
                </h2>
                <h1 className={styles.name}>
                    <FormattedMessage id="NAME" />
                    <span className={styles.period}>.</span>
                </h1>
                <p className={styles.description}>
                    <FormattedMessage id="TITLE_DESCRIPTION" />
                </p>
            </div>
            <div className={styles.buttonGroup}>
                <a
                    href="mailto:ericong18@gmail.com"
                    className={styles.link}
                    onClick={() =>
                        logToGA({
                            action: gaEvents.CONTACT_ME_CLICKED,
                        })
                    }
                >
                    <Button variation="outline">
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon="paper-plane"
                        />
                        <FormattedMessage id="TITLE_CONTACT" />
                    </Button>
                </a>
                <a
                    href="https://drive.google.com/file/d/1XdYGfHC1Irt0oh5YwNBZSWQhXAxFNGnL/view?usp=sharing"
                    className={styles.link}
                    onMouseEnter={handleResumeHoverIn}
                    onMouseLeave={handleResumeHoverOut}
                    onClick={() => logToGA({ action: gaEvents.RESUME_CLICKED })}
                >
                    <Button variation="primary">
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon="file-alt"
                        />
                        <FormattedMessage id="TITLE_RESUME" />
                    </Button>
                    <Confetti active={resumeHovered} config={confettiConfig} />
                </a>
            </div>
        </section>
    );
}
