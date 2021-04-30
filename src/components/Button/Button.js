import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, variation }) => {
  const getVariationStyle = () => {
    switch (variation) {
      case 'primary':
        return styles.primary;
      case 'outline':
        return styles.outline;
      default:
        return null;
    }
  };

  return (
    <button className={classNames(styles.button, getVariationStyle())}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variation: 'primary'
}

Button.propTypes = {
  variation: PropTypes.oneOf(['primary', 'outline'])
};

export default Button;
