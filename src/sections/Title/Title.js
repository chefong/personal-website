import { useState } from 'react';
import { Button } from 'reactstrap';
import { Fade } from 'react-reveal';
import { revealProps } from '../../shared/constants';
import styles from './Title.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Confetti from 'react-dom-confetti';

const confettiConfig = {
  angle: 90,
  spread: "80",
  startVelocity: 35,
  elementCount: 50,
  dragFriction: 0.12,
  duration: 2500,
  stagger: 5,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

export default function Title() {
  const [profileIn, setProfileIn] = useState(false);
  const [resumeHovered, setResumeHovered] = useState(false);

  const handleProfileHoverIn = e => {
    e.preventDefault();
    setProfileIn(true);
  }

  const handleProfileHoverOut = e => {
    e.preventDefault();
    setProfileIn(false);
  }

  const handleResumeHoverIn = e => {
    e.preventDefault();
    setResumeHovered(true);
  }

  const handleResumeHoverOut = e => {
    e.preventDefault();
    setResumeHovered(false);
  }

  return (
    <section className={`${styles.section} container-fluid`}>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <Fade {...revealProps}>
            <div className={`${styles.content} mb-5`}>
              <p className={styles.subtitle}>Hi, This Is</p>
              <h1 className={styles.name}>Eric Ong<span className={styles.period}>.</span></h1>
              <p className={styles.description}>I’m a Software Engineer based in the SF Bay Area with a focus on full-stack web development.</p>
              <div className="mt-5">
                <a href="mailto:ericong18@gmail.com" className="mr-4 mb-4">
                  <Button className={`${styles.button} ${styles.contact}`}>
                    <FontAwesomeIcon className={styles.contactIcon} icon="paper-plane" />
                    Contact Me
                  </Button>
                </a>
                <a
                  href="/docs/EricOngResume.pdf"
                  onMouseEnter={handleResumeHoverIn}
                  onMouseLeave={handleResumeHoverOut}
                  className="mr-4 mb-4" 
                >
                  <Button className={`${styles.button} ${styles.resume}`}>
                    <FontAwesomeIcon className={styles.resumeIcon} icon="file-alt" />
                    Resume
                    <Confetti active={resumeHovered} config={confettiConfig} />
                  </Button>
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-lg-3 offset-lg-1 col-md-4">
          <Fade {...revealProps}>
            <img
              className={styles.hero}
              src="/imgs/title/me.png"
              alt="Eric Ong"
              onMouseEnter={handleProfileHoverIn}
              onMouseLeave={handleProfileHoverOut}
              style={{ filter: profileIn ? "saturate(1)" : "saturate(0)" }}
            />
          </Fade>
        </div>
      </div>
    </section>
  )
}