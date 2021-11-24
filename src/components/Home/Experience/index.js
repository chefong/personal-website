import { forwardRef, useContext } from 'react';
import { FormattedMessage } from 'text-provider';
import styles from './styles.module.scss';
import { store } from '~/store/GlobalProvider';
import experiences from '~/common/constants/experiences';

const Experience = (props, ref) => {
    const { state } = useContext(store);
    const { theme } = state;

    return (
        <section
            className={`${styles.section} container-fluid`}
            id="experience"
            data-testid="Experience-container"
            ref={ref}
        >
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-10">
                    <div className={styles.headerGroup}>
                        <h2 className={styles.header}>
                            <span className={styles.headerNum}>03.</span> My
                            Experience
                        </h2>
                    </div>
                </div>
            </div>
            {experiences.map(
                ({
                    imagePath,
                    nameId,
                    positionId,
                    duration,
                    teamId,
                    initiativesId,
                    technologiesId,
                }) => (
                    <div
                        className={styles.experienceGroup}
                        key={nameId}
                        data-testid="Experience-item"
                    >
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-4">
                                <img
                                    className={styles.companyImage}
                                    src={
                                        theme === 'dark' && imagePath.dark
                                            ? imagePath.dark
                                            : imagePath.light
                                    }
                                    alt={nameId}
                                />
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6">
                                <div className={styles.companyInfo}>
                                    <p className={styles.name}>
                                        <FormattedMessage id={nameId} />
                                    </p>
                                    <p className={styles.position}>
                                        <FormattedMessage id={positionId} /> (
                                        {duration})
                                    </p>
                                    <hr className={styles.line} />
                                    <p className={styles.description}>
                                        <FormattedMessage id={teamId} />
                                        <br />
                                        <br />
                                        Initiatives:{' '}
                                        <FormattedMessage
                                            id={initiativesId}
                                            values={{ linkClass: styles.link }}
                                        />
                                        <br />
                                        <br />
                                        Technologies:{' '}
                                        <FormattedMessage id={technologiesId} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ),
            )}
        </section>
    );
};

export default forwardRef(Experience);
