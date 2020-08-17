import { useState } from 'react';
import styles from './About.module.css';
import { Fade } from 'react-reveal';
import { revealProps } from '../../shared/constants';

export default function About() {
  const [hovered, setHovered] = useState(false);

  const handleImageHover = () => setHovered(true);

  const handleImageUnhover = () => setHovered(false);

  const renderAnimation = () => {
    return hovered ? `${styles.animate}` : "";
  }

  return (
    <section className={`${styles.section} container-fluid`} id="about">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6">
          <div className={styles.headerGroup}>
            <Fade {...revealProps}>
              <h2 className={styles.header}><span className={styles.headerNum}>01.</span> About Me</h2>
            </Fade>
          </div>
          <div className={styles.content}>
            <Fade {...revealProps} cascade>
              <p className={styles.description}>I graduated Magna Cum Laude from the <a href="https://www.ucr.edu/" className={styles.link} target="_blank">University of California, Riverside</a> in June 2020 with a B.S. degree in Computer Science. I’m currently a Software Engineer at <a href="https://www.intuit.com/" className={styles.link} target="_blank">Intuit</a> on the Financial Data Platform, Widgets Team. Previously, I was at <a href="https://www.opentable.com/" className={styles.link} target="_blank">OpenTable</a> as a Software Engineering Intern on the Content Team.</p>
            </Fade>
            <div className={styles.thingsGroup}>
              <div className="row justify-content-center">
                <div className="col-6">
                  <Fade {...revealProps}>
                    <p className={styles.thingsHeader}>Things I Like</p>
                  </Fade>
                  <Fade {...revealProps} cascade>
                    <ul className={styles.thingsList}>
                      <li>Watermelon 🍉</li>
                      <li>70 - 85 BPM music 🎶</li>
                      <li>Minimal design 🎨</li>
                      <li>Premier League ⚽</li>
                    </ul>
                  </Fade>
                </div>
                <div className="col-6">
                  <Fade {...revealProps}>
                    <p className={styles.thingsHeader}>Thing I Don't Like</p>
                  </Fade>
                  <Fade {...revealProps} cascade>
                    <ul className={styles.thingsList}>
                      <li>Cilantro 🤢</li>
                    </ul>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className={styles.imageContainer}>
            <img
              src="/imgs/about/abstract.png"
              alt="lines"
              className={`${styles.image} ${styles.animate}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}