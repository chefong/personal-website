import styles from './About.module.css';
import { Fade } from 'react-reveal';
import { revealProps } from '../../shared/constants';
import { FormattedMessage } from "text-provider";

export default function About() {
  return (
    <section className={`${styles.section} container-fluid`} id="about">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6">
          <div className={styles.headerGroup}>
            <Fade {...revealProps}>
              <h2 className={styles.header}>
                <span className={styles.headerNum}>01. </span> 
                <FormattedMessage id="ABOUT_HEADING" />
                </h2>
            </Fade>
          </div>
          <div className={styles.content}>
            <Fade {...revealProps} cascade>
              <p className={styles.description}>
                <FormattedMessage
                  id="ABOUT_DESCRIPTION"
                  values={{
                    schoolClass: styles.link,
                    intuitClass: styles.link,
                    openTableClass: styles.link
                  }}
                />
              </p>
            </Fade>
            <div className={styles.thingsGroup}>
              <div className="row justify-content-center">
                <div className="col-6">
                  <Fade {...revealProps}>
                    <p className={styles.thingsHeader}>
                      <FormattedMessage id="ABOUT_LIKE" />
                    </p>
                  </Fade>
                  <Fade {...revealProps} cascade>
                    <ul className={styles.thingsList}>
                      <li>
                        <FormattedMessage id="ABOUT_LIKE_WATERMELON" />
                      </li>
                      <li>
                        <FormattedMessage id="ABOUT_LIKE_MUSIC" />
                      </li>
                      <li>
                        <FormattedMessage id="ABOUT_LIKE_DESIGN" />
                      </li>
                      <li>
                        <FormattedMessage id="ABOUT_LIKE_PREMIER_LEAGUE" />
                      </li>
                    </ul>
                  </Fade>
                </div>
                <div className="col-6">
                  <Fade {...revealProps}>
                    <p className={styles.thingsHeader}>
                      <FormattedMessage id="ABOUT_DISLIKE" />
                    </p>
                  </Fade>
                  <Fade {...revealProps} cascade>
                    <ul className={styles.thingsList}>
                      <li>
                        <FormattedMessage id="ABOUT_DISLIKE_CILANTRO" />
                      </li>
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