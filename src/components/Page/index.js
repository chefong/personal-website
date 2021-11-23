import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Page = ({ children, className }) => (
    <div className={classNames(styles.page, className)}>{children}</div>
);

Page.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
};

Page.defaultProps = {
    className: '',
};

export default Page;
