import styles from './About.module.css';

export default function About() {
  return (
    <section className={`${styles.section} container-fluid`} id="about">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6">
          <div className={styles.headerGroup}>
            <h2 className={styles.header}><span className={styles.headerNum}>01.</span> About Me</h2>
          </div>
          <div className={styles.content}>
            <p className={styles.description}>I graduated Magna Cum Laude from the <a href="https://www.ucr.edu/" className={styles.link} target="_blank">University of California, Riverside</a> in June 2020 with a B.S. degree in Computer Science. I’m an incoming Software Engineer at <a href="https://www.intuit.com/" className={styles.link} target="_blank">Intuit</a>, where I'll be working within the Financial Data Platform Team. Previously, I was at <a href="https://www.opentable.com/" className={styles.link} target="_blank">OpenTable</a> as a Software Engineering Intern on the Content Team.</p>
            <div className={styles.thingsGroup}>
              <div className="row justify-content-center">
                <div className="col-6">
                  <p className={styles.thingsHeader}>Things I Like</p>
                  <ul className={styles.thingsList}>
                    <li>Watermelon 🍉</li>
                    <li>70 - 85 BPM music 🎶</li>
                    <li>Minimal design 🎨</li>
                    <li>Premier League ⚽</li>
                  </ul>
                </div>
                <div className="col-6">
                  <p className={styles.thingsHeader}>Thing I Don't Like</p>
                  <ul className={styles.thingsList}>
                    <li>Cilantro 🤢</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className={styles.imageContainer}>
            <img src="/imgs/about/spin.gif" className={styles.image} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}