import React from 'react';
import styles from './Experience.module.css';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import { experiences } from '../../../constants';
import { experienceText } from '../../../content';

const linkHoverStyles = {
  cursor: "pointer",
  textDecoration: "underline"
};

function Experience() {
  return (
    <Element name="experience">
      <div className="container-fluid section-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Fade>
              <p className="subtitle">{experienceText.title}</p>
            </Fade>
            <hr/>
          </div>
        </div>
        {experiences.map(({ orgName, orgRole, description, image, orgLink }) => {
          return (
            <Fade key={orgName}>
              <div className={`row justify-content-center ${styles.experience}`} key={orgName}>
                <div className="col-md-3">
                  <img src={image} alt={orgName} className={styles.logo}/>
                </div>
                <div className={`col-md-6 ${styles.info}`}>
                  <a
                    href={orgLink}
                    target="_blank"
                    className={orgLink ? styles.linkHoverable : styles.nonHoverable}
                  >
                    <span className={styles.title}>{orgName}</span>
                  </a>
                  <p className={styles.position}><em>{orgRole}</em></p>
                  <hr className={styles.line}></hr>
                  <p>{description}</p>
                </div>
              </div>
            </Fade>
          )
        })}
      </div>
    </Element>
  )
}

export default Experience;