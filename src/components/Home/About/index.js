import { FormattedMessage } from 'text-provider';
import styles from './styles.module.scss';
import { likes, dislikes } from '~/common/constants';

export default function About() {
    return (
        <section
            className={`${styles.section} container-fluid`}
            id="about"
            data-testid="About-container"
        >
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className={styles.headerGroup}>
                        <h2 className={styles.header}>
                            <span className={styles.headerNum}>01. </span>
                            <FormattedMessage id="ABOUT_HEADING" />
                        </h2>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.description}>
                            <FormattedMessage
                                id="ABOUT_DESCRIPTION"
                                values={{
                                    schoolClass: styles.link,
                                    intuitClass: styles.link,
                                    openTableClass: styles.link,
                                }}
                            />
                        </p>
                        <div className={styles.thingsGroup}>
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <p className={styles.thingsHeader}>
                                        <FormattedMessage id="ABOUT_LIKE" />
                                    </p>
                                    <ul className={styles.thingsList}>
                                        {likes.map((id) => (
                                            <li
                                                key={id}
                                                data-testid="About-like"
                                            >
                                                <FormattedMessage id={id} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <p className={styles.thingsHeader}>
                                        <FormattedMessage id="ABOUT_DISLIKE" />
                                    </p>
                                    <ul className={styles.thingsList}>
                                        {dislikes.map((id) => (
                                            <li
                                                key={id}
                                                data-testid="About-dislike"
                                            >
                                                <FormattedMessage id={id} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.hero}
                            src="/imgs/about/memoji.png"
                            alt="Eric Ong"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
