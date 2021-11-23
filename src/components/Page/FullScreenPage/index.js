import PropTypes from 'prop-types';
import Page from '..';
import styles from './styles.module.scss';

const FullScreenPage = ({ children }) => (
    <Page className={styles.fullScreen}>{children}</Page>
);

FullScreenPage.propTypes = {
    children: PropTypes.element.isRequired,
};

export default FullScreenPage;
