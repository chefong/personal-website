import { FormattedMessage } from 'text-provider';
import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import Card from './Card';
import projects from '~/common/constants/projects';

const Projects = (props, ref) => {
    return (
        <section
            className={classNames('container-fluid', styles.section)}
            id="projects"
            data-testid="Projects-container"
            ref={ref}
        >
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-9">
                    <div className={styles.headerGroup}>
                        <h2 className={styles.header}>
                            <span className={styles.headerNum}>02. </span>
                            <FormattedMessage id="PROJECTS_HEADING" />
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-9">
                    <div className="row justify-content-center">
                        {projects.map((project) => (
                            <Card {...project} key={project.nameId} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default forwardRef(Projects);
