import styles from './Card.module.css';

export default function Card({ name, description, githubLink }) {
  return (
    <div className="col-md-4">
      <div className={styles.cardInfo}>
        <a href={githubLink} target="_blank">
          <img className={styles.github} src="/imgs/projects/github.svg" alt=""/>
        </a>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}