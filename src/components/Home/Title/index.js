import { useState, useContext } from 'react';
// import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'text-provider';
import Confetti from 'react-dom-confetti';
import Particles from 'react-particles-js';
import styles from './styles.module.scss';
import { store } from '~/store/GlobalProvider';
import Button from '~/components/Button';
import { gaEvents, particlesParams } from '~/common/constants';
import { logToGA } from '~/common/utils/ga';

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
        <section
            className={`${styles.section} container-fluid`}
            data-testid="Title-container"
        >
            {theme === 'dark' && (
                <Particles
                    canvasClassName={styles.particles}
                    params={particlesParams}
                />
            )}
            <div className="h-100 row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-6">
                    <div>
                        <p className={styles.subtitle}>
                            <FormattedMessage id="TITLE_GREETING" />
                        </p>
                        <h1 className={styles.name}>
                            <FormattedMessage id="NAME" />
                            <span className={styles.period}>.</span>
                        </h1>
                        <p className={styles.description}>
                            <FormattedMessage id="TITLE_DESCRIPTION" />
                        </p>
                        <div className="mt-5">
                            <a
                                href="mailto:ericong18@gmail.com"
                                className="mr-4 mb-4"
                                onClick={() =>
                                    logToGA({
                                        action: gaEvents.CONTACT_ME_CLICKED,
                                    })
                                }
                            >
                                <Button variation="outline">
                                    <FontAwesomeIcon
                                        className={styles.contactIcon}
                                        icon="paper-plane"
                                    />
                                    <FormattedMessage id="TITLE_CONTACT" />
                                </Button>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1XdYGfHC1Irt0oh5YwNBZSWQhXAxFNGnL/view?usp=sharing"
                                onMouseEnter={handleResumeHoverIn}
                                onMouseLeave={handleResumeHoverOut}
                                onClick={() =>
                                    logToGA({ action: gaEvents.RESUME_CLICKED })
                                }
                                className="mr-4 mb-4"
                            >
                                <Button variation="primary">
                                    <FontAwesomeIcon
                                        className={styles.resumeIcon}
                                        icon="file-alt"
                                    />
                                    <FormattedMessage id="TITLE_RESUME" />
                                    <Confetti
                                        active={resumeHovered}
                                        config={confettiConfig}
                                    />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
