import React from 'react';
import styles from './Experience.module.css';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import { experiences } from '../../../constants';
import { experienceText } from '../../../content';

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
        {experiences.map(experience => {
          const { title, subtitle, description, image } = experience;
          
          return (
            <div className={`row justify-content-center ${styles.experience}`} key={title}>
              <div className="col-md-3">
                <Fade>
                  <img src={image} alt={title} className={styles.logo}/>
                </Fade>
              </div>
              <div className={`col-md-6 ${styles.info}`}>
                <Fade>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.position}><em>{subtitle}</em></p>
                  <hr className={styles.line}></hr>
                  <p>{description}</p>
                </Fade>
              </div>
            </div>
          )
        })}
      </div>
    </Element>
  )
}

export default Experience;