import styles from './Footer.module.css';
import { Fade } from 'react-reveal';
import { FormattedMessage } from 'text-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handles, revealProps } from '../../shared/constants';

export default function Footer() {
  return (
    <div className={`${styles.container} container-fluid`} data-testid="Footer-container">
      <div className="row justify-content-center">
        <div className={styles.iconGroup}>
          <Fade {...revealProps}>
            {handles.map(({ icon, link }, index) => (
              <a className={styles.link} href={link} key={index} target="_blank" data-testid="Footer-icon-link">
                <FontAwesomeIcon className={styles.icon} icon={icon} />
              </a>
            ))}
          </Fade>
        </div>
      </div>
      <div className="row justify-content-center">
        <Fade {...revealProps}>
          <p className={styles.message}>
            <FormattedMessage id="FOOTER_DESCRIPTION" />
          </p>
        </Fade>
      </div>
    </div>
  )
}