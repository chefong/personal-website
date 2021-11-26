import { FormattedMessage } from 'text-provider';
import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Card from './Card';
import projects from '~/common/constants/projects';

const Projects = (props, ref) => {
    return (
        <section
            className={styles.section}
            id="projects"
            data-testid="Projects-container"
            ref={ref}
        >
            <h2 className={styles.header}>
                <span className={styles.headerNum}>02. </span>
                <FormattedMessage id="PROJECTS_HEADING" />
            </h2>
            <ul className={styles.cards}>
                {projects.map((project) => (
                    <Card {...project} key={project.nameId} />
                ))}
            </ul>
        </section>
    );
};

export default forwardRef(Projects);
