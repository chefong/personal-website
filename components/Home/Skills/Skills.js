import React from 'react';
import styles from './Skills.module.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Element } from 'react-scroll';
import { skillsText } from '../../../content';
import { skillsSection } from '../../../constants';

function Skills() {
  return (
    <Element name="skills">
      <div className="container-fluid section-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Fade>
              <p className="subtitle">{skillsText.title}</p>
            </Fade>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          {skillsSection.map(({ type, icons }) => {
            return (
              <div className={`col-md-4 ${styles.section}`}>
                <h5 className={styles.type}>{type}</h5>
                <div className="row">
                  {icons.map(({ name, imagePath }) => {
                    return (
                      <div className="col-3 col-md-3 col-xs-3">
                        <Zoom>
                          <img src={imagePath} alt={name} className={styles.icon}/>
                        </Zoom>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Element>
  )
}

export default Skills;