import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'text-provider';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Card({ nameId, descriptionId, githubLink }) {
    return (
        <li className={styles.cardInfo}>
            <a href={githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                    className={styles.github}
                    icon={['fab', 'github']}
                />
            </a>
            <p className={styles.name}>
                <FormattedMessage id={nameId} />
            </p>
            <p className={styles.description}>
                <FormattedMessage id={descriptionId} />
            </p>
        </li>
    );
}

Card.propTypes = {
    nameId: PropTypes.string.isRequired,
    descriptionId: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
};
