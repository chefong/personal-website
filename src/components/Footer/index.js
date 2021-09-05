import { FormattedMessage } from 'text-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { handles } from '~/common/constants';
import { logToGA } from '~/common/utils/ga';

export default function Footer() {
  const logFooterIconClick = (footerIconEventId) => {
    logToGA({ action: footerIconEventId });
  };

  return (
    <div className={`${styles.container} container-fluid`} data-testid="Footer-container">
      <div className="row justify-content-center">
        <div className={styles.iconGroup}>
          {handles.map(({ icon, link, clickEventId }) => (
            <a className={styles.link} href={link} key={link} target="_blank" data-testid="Footer-icon-link" rel="noreferrer" onClick={() => logFooterIconClick(clickEventId)}>
              <FontAwesomeIcon className={styles.icon} icon={icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="row justify-content-center">
        <p className={styles.message}>
          <FormattedMessage id="FOOTER_DESCRIPTION" />
        </p>
      </div>
    </div>
  );
}
