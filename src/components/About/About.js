import styles from './About.module.css';

export default function About() {
  return (
    <section className={`${styles.section} container-fluid`}>
      <div className="row justify-content-center">
        <div className="col-md-5 offset-md-2">
          <div className={styles.headerGroup}>
            <h2 className={styles.header}><span className={styles.headerNum}>01.</span> About Me <img src="/imgs/header-line.svg" className={styles.headerLine}/></h2>
          </div>
          <div className={styles.content}>
            <p className={styles.description}>I graduated Magna Cum Laude from the University of California, Riverside in June 2020 with a B.S. degree in Computer Science. I’m currently a Software Engineer at Intuit, where I’m working within the Financial Data Platform Team. Previously, I was at OpenTable as a Software Engineering Intern on the Content Team.</p>
            <div className={styles.thingsGroup}>
              <div className="row justify-content-center">
                <div className="col-6">
                  <p className={styles.thingsHeader}>Things I Like</p>
                  <ul className={styles.thingsList}>
                    <li>Watermelon</li>
                    <li>70 - 85 BPM music</li>
                    <li>Minimal design</li>
                    <li>Premier League</li>
                  </ul>
                </div>
                <div className="col-6">
                  <p className={styles.thingsHeader}>Thing I Don't Like</p>
                  <ul className={styles.thingsList}>
                    <li>Cilantro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">hi</div>
      </div>
    </section>
  );
}