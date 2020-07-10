import styles from './Projects.module.css';
import Card from './Card/Card';
import { projects } from '../../shared/constants';

export default function Projects() {
  return (
    <section className={`${styles.section} container-fluid`} id="projects">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-9">
          <div className={styles.headerGroup}>
            <h2 className={styles.header}><span className={styles.headerNum}>02.</span> Projects</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-9">
          <div className="row justify-content-center">
            {projects.map(project => <Card { ...project } />)}
          </div>
        </div>
      </div>
    </section>
  )
}