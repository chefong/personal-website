import styles from './Title.module.css';
import { Button } from 'reactstrap';

export default function Title() {
  return (
    <section className={`${styles.section} container-fluid`}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className={`${styles.content} mb-5`}>
            <p className={styles.subtitle}>Hi, This Is</p>
            <h1 className={styles.name}>Eric Ong<span className={styles.period}>.</span></h1>
            <p className={styles.description}>I’m a Software Engineer based in the SF Bay Area with a focus on full-stack web development.</p>
            <div className="mt-5">
              <Button className={`${styles.button} ${styles.contact} mr-4`}>Contact Me</Button>
              <a href="https://drive.google.com/file/d/1p9soqZuF9Ud7QaSsN0SV9fIjAScFseV3/view?usp=sharing">
                <Button className={`${styles.button} ${styles.resume} mr-4`}>
                  <img className={styles.resumeIcon} src="/imgs/title/file-solid.svg" alt=""/>
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img className={`${styles.hero}`} src="/imgs/title/circle.svg" alt=""/>
        </div>
      </div>
    </section>
  )
}