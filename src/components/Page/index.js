import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Page = ({ children, style }) => (
  <div className={styles.page} style={style}>{children}</div>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

Page.defaultProps = {
  style: {},
};

export default Page;
