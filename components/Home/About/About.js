import React from 'react';
import styles from './About.module.css';
import Fade from 'react-reveal/Fade';
import eric from '../../../assets/imgs/about/collection.png';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { Element } from 'react-scroll';
import { aboutText } from '../../../content';
import { githubUsername } from '../../../constants';

function About() {
  return (
    <Element name="about">
      <div className="container-fluid section-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Fade>
              <p className="subtitle">{aboutText.title}</p>
            </Fade>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <Fade left>
              <img src={eric} alt="Eric Ong" className={styles.portrait} />
            </Fade>
          </div>
          <div className="col-md-5">
            <Fade>
              <p className={styles.greeting}>{aboutText.greetings}</p>
              <p>{aboutText.greetingsSub1}</p>
              <p>{aboutText.greetingsSub2}</p>
              <div className={styles.github}>
                <GitHubCalendar
                  blockSize={24}
                  blockMargin={4}
                  fontSize={24}
                  username={githubUsername}
                >
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About;