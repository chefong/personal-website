import PropTypes from 'prop-types';
import LinkCard from './LinkCard';
import styles from './styles.module.scss';

export default function Links({ links }) {
    return (
        <div className={styles.container}>
            <figure className={styles.figure}>
                <img src="/imgs/self.jpg" alt="self" className={styles.self} />
            </figure>
            <ul className={styles.list}>
                {links.map(({ link, text }) => (
                    <li key={link}>
                        <LinkCard link={link} text={text} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

Links.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
