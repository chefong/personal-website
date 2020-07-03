import React from 'react';
import styles from './Title.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element } from 'react-scroll';
import { titleText } from '../../../content';
import { Link } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import { scrollOffsetDesktop, scrollDuration, fontAwesomeSize, links, resume } from '../../../constants';
import Fade from 'react-reveal/Fade';
import eric from '../../../assets/imgs/title/name.png';
import apple from '../../../assets/imgs/title/apple.png';
import downArrow from '../../../assets/imgs/title/double-down.svg';

function Title() {
  return (
    <Element name="title">
      <div className={styles.container}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <Fade>
                    <img src={eric} alt="Eric Ong" className={styles.name}/>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <Fade>
                <img src={apple} alt="Apple" className={styles.apple} />
              </Fade>
              <div className={styles.icons}>
                {links.map(({ url, icon }) => (
                  <a href={url} className={styles.icon} rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} size={fontAwesomeSize} />
                  </a>
                ))}
                <a href={resume} rel="noopener noreferrer" className={styles.resume}>{titleText.resumeButton}</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Link activeClass="active" to="about" spy smooth offset={isMobile ? 2 : scrollOffsetDesktop} duration={scrollDuration}>
              <img className={styles.arrow} src={downArrow} alt="down"/>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Title;