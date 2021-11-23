import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const LinkCard = ({ text, link }) => (
    <a className={styles.card} href={link} target="_blank" rel="noreferrer">
        {text}
    </a>
);

LinkCard.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default LinkCard;
