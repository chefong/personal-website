import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({ children, variation }) => (
  <button type="button" className={classNames(styles.button, styles[variation])}>
    {children}
  </button>
);

Button.defaultProps = {
  variation: 'primary',
};

Button.propTypes = {
  variation: PropTypes.oneOf(['primary', 'outline']),
  children: PropTypes.oneOfType(
    [
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ],
  ).isRequired,
};

export default Button;
