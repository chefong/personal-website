import { forwardRef, useContext } from 'react';
import { FormattedMessage } from 'text-provider';
import styles from './styles.module.scss';
import { store } from '~/store/GlobalProvider';

const experiences = [
    {
        imagePath: {
            light: 'imgs/experience/opentable.svg',
            dark: 'imgs/experience/opentable-white.svg',
        },
        nameId: 'EXPERIENCE_OPENTABLE',
        positionId: 'EXPERIENCE_OPENTABLE_ROLE',
        duration: 'February 2021 - Present',
        teamId: 'EXPERIENCE_OPENTABLE_TEAM',
        initiativeIds: [
            'EXPERIENCE_OPENTABLE_INITIATIVES_1',
            'EXPERIENCE_OPENTABLE_INITIATIVES_2',
            'EXPERIENCE_OPENTABLE_INITIATIVES_3',
        ],
        technologiesId: 'EXPERIENCE_OPENTABLE_TECHNOLOGIES_2',
    },
    {
        imagePath: {
            light: '/imgs/experience/intuit.svg',
            dark: '/imgs/experience/intuit-white.svg',
        },
        nameId: 'EXPERIENCE_INTUIT',
        positionId: 'EXPERIENCE_INTUIT_ROLE',
        duration: 'July 2020 - February 2021',
        teamId: 'EXPERIENCE_INTUIT_TEAM',
        initiativeIds: [
            'EXPERIENCE_INTUIT_INITIATIVES_1',
            'EXPERIENCE_INTUIT_INITIATIVES_2',
            'EXPERIENCE_INTUIT_INITIATIVES_3',
            'EXPERIENCE_INTUIT_INITIATIVES_4',
        ],
        technologiesId: 'EXPERIENCE_INTUIT_TECHNOLOGIES',
    },
    {
        imagePath: {
            light: 'imgs/experience/opentable.svg',
            dark: 'imgs/experience/opentable-white.svg',
        },
        nameId: 'EXPERIENCE_OPENTABLE',
        positionId: 'EXPERIENCE_OPENTABLE_INTERN_ROLE',
        duration: 'June 2019 - August 2019',
        teamId: 'EXPERIENCE_OPENTABLE_TEAM_INTERN',
        initiativeIds: [
            'EXPERIENCE_OPENTABLE_INITIATIVES_INTERN_1',
            'EXPERIENCE_OPENTABLE_INITIATIVES_INTERN_2',
        ],
        technologiesId: 'EXPERIENCE_OPENTABLE_TECHNOLOGIES_1',
    },
];

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
                    initiativeIds,
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
                                    </p>
                                    <ul className={styles.initiativesList}>
                                        {initiativeIds.map((initiativeId) => (
                                            <li
                                                key={initiativeId}
                                                className={styles.initiative}
                                            >
                                                <FormattedMessage
                                                    id={initiativeId}
                                                    values={{
                                                        linkClass: styles.link,
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
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
