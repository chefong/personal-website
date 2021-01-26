import styles from './About.module.scss';
import { Fade } from 'react-reveal';
import { revealProps, likes, dislikes } from '../../shared/constants';
import { FormattedMessage } from 'text-provider';

export default function About() {
  return (
    <section className={`${styles.section} container-fluid`} id="about" data-testid="About-container">
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
                      {likes.map(id => (
                        <li key={id} data-testid="About-like">
                          <FormattedMessage id={id} />
                        </li>
                      ))}
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
                      {dislikes.map(id => (
                        <li key={id} data-testid="About-dislike">
                          <FormattedMessage id={id} />
                        </li>
                      ))}
                    </ul>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className={styles.imageContainer}>
            <img className={styles.hero} src="/imgs/about/memoji.png" alt="Eric Ong" />
          </div>
        </div>
      </div>
    </section>
  );
}