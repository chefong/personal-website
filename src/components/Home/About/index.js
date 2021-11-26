import { FormattedMessage } from 'text-provider';
import { forwardRef } from 'react';
import styles from './styles.module.scss';
import { dislikes, likes } from '~/common/constants/interests';

const About = (props, ref) => {
    return (
        <section
            className={styles.section}
            id="about"
            data-testid="About-container"
            ref={ref}
        >
            <h2 className={styles.header}>
                <span className={styles.headerNum}>01. </span>
                <FormattedMessage id="ABOUT_HEADING" />
            </h2>
            <div className={styles.content}>
                <div className={styles.descriptionContainer}>
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
                    <div className={styles.things}>
                        <div className={styles.thingsGroup}>
                            <p className={styles.thingsHeader}>
                                <FormattedMessage id="ABOUT_LIKE" />
                            </p>
                            <ul className={styles.thingsList}>
                                {likes.map((id) => (
                                    <li
                                        key={id}
                                        data-testid="About-like"
                                        className={styles.thing}
                                    >
                                        <FormattedMessage id={id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.thingsGroup}>
                            <p className={styles.thingsHeader}>
                                <FormattedMessage id="ABOUT_DISLIKE" />
                            </p>
                            <ul className={styles.thingsList}>
                                {dislikes.map((id) => (
                                    <li
                                        key={id}
                                        data-testid="About-dislike"
                                        className={styles.thing}
                                    >
                                        <FormattedMessage id={id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <img
                    className={styles.hero}
                    src="/imgs/about/memoji.png"
                    alt="Eric Ong"
                />
            </div>
        </section>
    );
};

export default forwardRef(About);
