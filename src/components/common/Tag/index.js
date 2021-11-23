import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Tag = ({ text, color }) => (
    <span className={classNames(styles.tag, styles[color])}>{text}</span>
);

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Tag;
