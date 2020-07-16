import styles from './Card.module.css';
import { Badge } from 'reactstrap';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { revealProps } from '../../../shared/constants';

export default function Card({ name, description, githubLink, wonHackathon }) {
  return (
    <div className="col-lg-4 col-md-6">
      <Fade {...revealProps}>
        <div className={styles.cardInfo}>
          <a href={githubLink} target="_blank">
            <FontAwesomeIcon className={styles.github} icon={['fab', 'github']} />
          </a>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
          {wonHackathon && <Badge className={styles.badge}>HACKATHON WINNER</Badge>}
        </div>
      </Fade>
    </div>
  )
}