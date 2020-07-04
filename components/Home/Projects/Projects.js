import React, { useState } from 'react';
import styles from './Projects.module.css';
import Zoom from 'react-reveal/Zoom';
import { Modal, Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { Element } from 'react-scroll';
import { projectsText } from '../../../content';
import { selectProjectOptions, projects } from '../../../constants';
import { filterProject } from '../../../helpers';

const { Option } = Select;

function Projects() {
  const [isProjectOpen, setIsProjectOpen] = useState({});
  const [projectOption, setProjectOption] = useState(selectProjectOptions[0]);

  const handleProjectModalView = (e, project) => {
    e.preventDefault();
    setIsProjectOpen(prevIsProjectOpen => ({ [project]: !prevIsProjectOpen[project] }));
  };

  const handleSelectChange = value => setProjectOption(value);

  return (
    <Element name="projects">
      <div className="container-fluid section-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Select
              className={styles.filter}
              defaultValue={projectOption}
              value={projectOption}
              onChange={handleSelectChange}
            >
              {selectProjectOptions.map(option => <Option value={option} key={option}>{option}</Option>)}
            </Select>
            <p className="subtitle">{projectsText.title}</p>
            <hr/>
          </div>
        </div>
        <div className={styles.thumbnails}>
          <div className="row justify-content-center">
            {projects
              .filter(project => filterProject(project, projectOption))
              .map(project => {
                const {
                  imagePath,
                  name,
                  screenshotPath,
                  text,
                  githubLink,
                  demoLink,
                  devpostLink
                } = project;

                return (
                  <div className="col-md-4" key={name}>
                    <Zoom>
                      <input
                        type="image"
                        src={imagePath}
                        className={styles.preview}
                        onClick={e => handleProjectModalView(e, name)}
                        aria-label="project-modal"
                      />
                      <Modal
                        className={styles.modal}
                        width={800}
                        visible={isProjectOpen[name]}
                        onCancel={e => handleProjectModalView(e, name)}
                        footer={null}
                        zIndex={2000}
                        centered
                      >
                        <div className="row justify-content-center">
                          <img
                            src={screenshotPath}
                            alt="name"
                            className={styles.screenshot}
                          />
                        </div>
                        <div className="row justify-content-center">
                          <p className={styles.info}>{text}</p>
                          {
                            githubLink &&
                              <a
                                className={styles.githubLink}
                                href={githubLink}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <FontAwesomeIcon icon={['fab', 'github']} />
                              </a>
                          }
                          {
                            devpostLink &&
                              <a
                                className={styles.devpostLink}
                                href={devpostLink}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <img className={styles.devpostIcon} src="/imgs/projects/devpost.svg" alt=""/>
                              </a>
                          }
                          {
                            demoLink &&
                              <a
                                className={styles.demoLink}
                                href={demoLink}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <FontAwesomeIcon icon={faGlobeAmericas} classname={styles.demoIcon}/>
                              </a>
                          }
                        </div>
                      </Modal>
                    </Zoom>
                  </div>
                )
            })}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Projects;