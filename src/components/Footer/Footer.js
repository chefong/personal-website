import styles from './Footer.module.css';
import { handles } from '../../shared/constants';

export default function Footer() {
  return (
    <div className={`${styles.container} container-fluid`}>
      <div className="row justify-content-center">
        <div className={styles.iconGroup}>
          {handles.map(({ name, iconPath, link }, index) => (
            <a className={styles.link} href={link} key={index} target="_blank">
              <img className={styles.icon} src={iconPath} alt={name}/>
            </a>
          ))}
        </div>
      </div>
      <div className="row justify-content-center">
        <p className={styles.message}>Made with 🥛🍵 by Eric Ong</p>
      </div>
    </div>
  )
}