import { useState } from 'react';
import { Button } from 'reactstrap';
import { Fade } from 'react-reveal';
import { revealProps } from '../../shared/constants';
import styles from './Title.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Title() {
  const [profileIn, setProfileIn] = useState(false);

  const handleProfileHoverIn = e => {
    e.preventDefault();
    setProfileIn(true);
  }

  const handleProfileHoverOut = e => {
    e.preventDefault();
    setProfileIn(false);
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
                <a href="mailto:ericong18@gmail.com">
                  <Button className={`${styles.button} ${styles.contact} mr-4 mb-4`}>
                    <FontAwesomeIcon className={styles.contactIcon} icon="paper-plane" />
                    Contact Me
                  </Button>
                </a>
                <a href="/docs/EricOngResume.pdf">
                  <Button className={`${styles.button} ${styles.resume} mr-4 mb-4`}>
                    <FontAwesomeIcon className={styles.resumeIcon} icon="file-alt" />
                    Resume
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
              src="/imgs/title/me-2.svg"
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