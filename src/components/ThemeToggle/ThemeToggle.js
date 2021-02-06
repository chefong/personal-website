import { useState } from 'react';
import styles from './ThemeToggle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = {
  light: ['far', 'sun'],
  dark: ['far', 'moon'],
  tan: 'wind',
};

const themeOrder = ['light', 'tan', 'dark'];

export default function ThemeToggle(props) {
  let siteTheme;
  if (process.browser) siteTheme = localStorage.getItem('siteTheme');

  const { onChange } = props;
  const [activeTheme, setActiveTheme] = useState(siteTheme || 'light');

  const handleToggleClick = e => {
    e.preventDefault();

    let nextThemeIndex = themeOrder.indexOf(activeTheme) + 1;
    if (nextThemeIndex === themeOrder.length) nextThemeIndex = 0;
    
    const nextTheme = themeOrder[nextThemeIndex];
    setActiveTheme(themeOrder[nextThemeIndex]);
    onChange(nextTheme);
  };

  return (
    <div className="ThemeToggle-container">
      <FontAwesomeIcon className={styles.icon} icon={icons[activeTheme]} onClick={handleToggleClick} />
    </div>
  )
};
