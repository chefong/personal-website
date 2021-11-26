import { FormattedMessage } from 'text-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { logToGA } from '~/common/utils/ga';
import socials from '~/common/constants/socials';

export default function Footer() {
    const logFooterIconClick = (footerIconEventId) => {
        logToGA({ action: footerIconEventId });
    };

    return (
        <footer className={styles.footer} data-testid="Footer-container">
            <div className={styles.iconGroup}>
                {socials.map(({ icon, link, clickEventId }) => (
                    <a
                        className={styles.link}
                        href={link}
                        key={link}
                        target="_blank"
                        data-testid="Footer-icon-link"
                        rel="noreferrer"
                        onClick={() => logFooterIconClick(clickEventId)}
                    >
                        <FontAwesomeIcon className={styles.icon} icon={icon} />
                    </a>
                ))}
            </div>
            <p className={styles.message}>
                <FormattedMessage id="FOOTER_DESCRIPTION" />
            </p>
        </footer>
    );
}
