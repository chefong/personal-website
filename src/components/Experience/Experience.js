import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={`${styles.section} container-fluid`}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className={styles.headerGroup}>
            <h2 className={styles.header}><span className={styles.headerNum}>02.</span> My Experience</h2>
          </div>
        </div>
      </div>
      <div className={styles.experienceGroup}>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <img className={styles.companyImage} src="/imgs/experience/intuit.png" alt=""/>
          </div>
          <div className="col-md-5">
            <div className={styles.companyInfo}>
              <p className={styles.name}>Intuit</p>
              <p className={styles.position}>Software Engineer (July 2020 - Present)</p>
              <hr className={styles.line} />
              <p className={styles.description}>Financial Data Platform Team.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.experienceGroup}>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <img className={styles.companyImage} src="/imgs/experience/opentable.png" alt=""/>
          </div>
          <div className="col-md-5">
            <div className={styles.companyInfo}>
              <p className={styles.name}>OpenTable</p>
              <p className={styles.position}>Software Engineering Intern (June 2019 - August 2019)</p>
              <hr className={styles.line} />
              <p className={styles.description}>As a part of the Content Team, I worked on various consumer-facing products (internal tools, Restaurant Profile, GuestCenter Admin) using React, TypeScript, Jest, and OpenComponents. One of the projects I worked on focused on improving an existing internal tool to speed up workflow for internal marketing users. Another project I worked on was kickstarting the Gallery Photos feature on OpenTable's GuestCenter Admin with my team, giving restaurants the ability to manage their own photos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}