import styles from './Projects.module.scss';
import Card from './Card/Card';
import { FormattedMessage } from 'text-provider';
import { projects } from '../../shared/constants';

export default function Projects() {
  return (
    <section className={`${styles.section} container-fluid`} id="projects" data-testid="Projects-container">
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
            {projects.map((project, index) => <Card { ...project } key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}