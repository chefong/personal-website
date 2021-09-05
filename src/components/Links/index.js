import LinkCard from './LinkCard';
import styles from './styles.module.scss';

const listItems = [
  {
    link: 'https://ericong.me',
    text: 'Personal website 🎨',
  },
  {
    link: 'https://github.com/chefong/nutshell',
    text: 'Latest hackathon project 👨‍💻',
  },
  {
    link: 'https://open.spotify.com/playlist/4bMzdBudl61NMpHfA1Bdio?si=6b876a8599124f9c',
    text: 'Ketchin Spotify playlist 🔥',
  },
  {
    link: 'https://www.instagram.com/chef_ongs_kitchen/',
    text: 'Cooking IG 🧑‍🍳',
  },
];

export default function Links() {
  return (
    <div className={styles.container}>
      <figure className={styles.figure}>
        <img src="/imgs/self.jpg" alt="self" className={styles.self} />
      </figure>
      <ul className={styles.list}>
        {listItems.map(({ link, text }) => (
          <li key={link}>
            <LinkCard link={link} text={text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
