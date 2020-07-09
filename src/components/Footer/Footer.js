import styles from './Footer.module.css';
import { handles } from '../../shared/constants';

export default function Footer() {
  return (
    <div className={`${styles.container} container-fluid`}>
      <div className="row justify-content-center">
        <div className={styles.iconGroup}>
          {handles.map(({ name, iconPath, link }) => (
            <a className={styles.link} href={link} key={name} target="_blank">
              <img className={styles.icon} src={iconPath} alt={name}/>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}