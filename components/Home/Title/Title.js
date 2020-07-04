import React from 'react';
import styles from './Title.module.css';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element } from 'react-scroll';
import { titleText } from '../../../content';
import { Link } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import { scrollOffsetDesktop, scrollDuration, fontAwesomeSize, links, resume } from '../../../constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faGlobe, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faEnvelope, faGlobe, faCloudDownloadAlt);

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
                    <img src="/imgs/title/name.png" alt="Eric Ong" className={styles.name}/>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <Fade>
                <img src="/imgs/title/apple.png" alt="Apple" className={styles.apple} />
              </Fade>
              <div className={styles.icons}>
                {links.map(({ url, icon }) => (
                  <a href={url} className={styles.icon} rel="noopener noreferrer" key={url}>
                    <FontAwesomeIcon icon={icon} size={fontAwesomeSize} />
                  </a>
                ))}
                <a href={resume} rel="noopener noreferrer" className={styles.resume}>{titleText.resumeButton}</a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Link activeClass="active" to="about" spy smooth offset={isMobile ? 2 : scrollOffsetDesktop} duration={scrollDuration}>
              <img className={styles.arrow} src="/imgs/title/double-down.svg" alt="down"/>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Title;