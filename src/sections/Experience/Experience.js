import styles from './Experience.module.css';
import { Fade } from 'react-reveal';
import { FormattedMessage } from 'text-provider';
import { experiences, revealProps } from '../../shared/constants';

export default function Experience() {
  return (
    <section className={`${styles.section} container-fluid`} id="experience" data-testid="Experience-container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-10">
          <Fade {...revealProps}>
            <div className={styles.headerGroup}>
              <h2 className={styles.header}><span className={styles.headerNum}>03.</span> My Experience</h2>
            </div>
          </Fade>
        </div>
      </div>
      {experiences.map(({ imagePath, nameId, position, duration, descriptionId }, index) => (
        <div className={styles.experienceGroup} key={index} data-testid="Experience-item">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-4">
              <Fade {...revealProps}>
                <img className={styles.companyImage} src={imagePath} alt={nameId}/>
              </Fade>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className={styles.companyInfo}>
                <Fade {...revealProps}>
                  <p className={styles.name}>
                    <FormattedMessage id={nameId} />
                  </p>
                  <p className={styles.position}>{position} ({duration})</p>
                  <hr className={styles.line} />
                  <p className={styles.description}>
                    <FormattedMessage id={descriptionId} />
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}