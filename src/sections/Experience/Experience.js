import styles from './Experience.module.scss';
import { FormattedMessage } from 'text-provider';
import { experiences } from '../../shared/constants';

export default function Experience(props) {
  const { theme } = props;

  return (
    <section className={`${styles.section} container-fluid`} id="experience" data-testid="Experience-container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-10">
          <div className={styles.headerGroup}>
            <h2 className={styles.header}><span className={styles.headerNum}>03.</span> My Experience</h2>
          </div>
        </div>
      </div>
      {experiences.map(({ imagePath, nameId, positionId, duration, descriptionId }, index) => (
        <div className={styles.experienceGroup} key={index} data-testid="Experience-item">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-4">
              <img
                className={styles.companyImage}
                src={theme === 'dark' && imagePath.dark ? imagePath.dark : imagePath.light}
                alt={nameId}
              />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className={styles.companyInfo}>
                <p className={styles.name}>
                  <FormattedMessage id={nameId} />
                </p>
                <p className={styles.position}>
                  <FormattedMessage id={positionId} />{' '}
                  ({duration})
                </p>
                <hr className={styles.line} />
                <p className={styles.description}>
                  <FormattedMessage id={descriptionId} />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}