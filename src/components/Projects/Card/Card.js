import styles from './Card.module.css';
import { Badge } from 'reactstrap';

export default function Card({ name, description, githubLink, wonHackathon }) {
  return (
    <div className="col-md-4">
      <div className={styles.cardInfo}>
        <a href={githubLink} target="_blank">
          <img className={styles.github} src="/imgs/projects/github.svg" alt=""/>
        </a>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
        {wonHackathon && <Badge className={styles.badge}>HACKATHON WINNER</Badge>}
      </div>
    </div>
  )
}