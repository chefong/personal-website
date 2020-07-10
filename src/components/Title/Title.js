import { useState } from 'react';
import { Button } from 'reactstrap';
import styles from './Title.module.css';

const darkPlaneIconPath = "/imgs/title/paper-plane-solid.svg";
const lightPlaneIconPath = "/imgs/title/paper-plane-solid-light.svg";

const bwProfileImagePath = "/imgs/title/me.svg";
const coloredProfileImagePath = "/imgs/title/me-colored.svg";

export default function Title() {
  const [contactIconPath, setContactIconPath] = useState(darkPlaneIconPath);
  const [profileIn, setProfileIn] = useState(false);

  const handleContactHoverIn = e => {
    e.preventDefault();
    setContactIconPath(lightPlaneIconPath);
  }

  const handleContactHoverOut = e => {
    e.preventDefault();
    setContactIconPath(darkPlaneIconPath);
  }

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
          <div className={`${styles.content} mb-5`}>
            <p className={styles.subtitle}>Hi, This Is</p>
            <h1 className={styles.name}>Eric Ong<span className={styles.period}>.</span></h1>
            <p className={styles.description}>I’m a Software Engineer based in the SF Bay Area with a focus on full-stack web development.</p>
            <div className="mt-5">
              <a href="mailto:ericong18@gmail.com">
                <Button className={`${styles.button} ${styles.contact} mr-4 mb-4`} onMouseEnter={handleContactHoverIn} onMouseLeave={handleContactHoverOut}>
                  <img className={styles.resumeIcon} src={contactIconPath} alt="" />
                  Contact Me
                </Button>
              </a>
              <a href="/docs/EricOngResume.pdf">
                <Button className={`${styles.button} ${styles.resume} mr-4 mb-4`}>
                  <img className={styles.resumeIcon} src="/imgs/title/file-solid.svg" alt=""/>
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1 col-md-4">
          <img
            className={`${styles.hero}`}
            src="/imgs/title/me-2.svg"
            alt="Eric Ong"
            onMouseEnter={handleProfileHoverIn}
            onMouseLeave={handleProfileHoverOut}
            style={{ filter: profileIn ? "saturate(1)" : "saturate(0)" }}
          />
        </div>
      </div>
    </section>
  )
}