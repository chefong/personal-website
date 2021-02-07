import { useState } from 'react';
import styles from './ThemeToggle.module.scss';
import { SunnyOutline, MoonOutline, CafeOutline } from 'react-ionicons';

const themeOrder = ['light', 'tan', 'dark'];
const iconSize = '28px';
const iconColors = {
  light: '#222222',
  dark: '#fffefb',
  tan: '#222222',
};

export default function ThemeToggle(props) {
  let siteTheme;
  if (process.browser) siteTheme = localStorage.getItem('siteTheme');

  const { onChange } = props;
  const [activeTheme, setActiveTheme] = useState(siteTheme || 'light');
  const iconColor = iconColors[activeTheme];

  const handleToggleClick = () => {
    let nextThemeIndex = themeOrder.indexOf(activeTheme) + 1;
    if (nextThemeIndex === themeOrder.length) nextThemeIndex = 0;
    
    const nextTheme = themeOrder[nextThemeIndex];
    setActiveTheme(themeOrder[nextThemeIndex]);
    localStorage.setItem('siteTheme', nextTheme);
    onChange(nextTheme);
  };

  const getIcon = () => {
    const iconProps = {
      className: styles.icon,
      color: iconColor,
      onClick: handleToggleClick,
      height: iconSize,
      width: iconSize,
    };

    switch (activeTheme) {
      case 'tan':
        return <CafeOutline {...iconProps} />;
      case 'dark':
        return <MoonOutline {...iconProps} />;
      default:
        return <SunnyOutline {...iconProps} />;
    }
  };

  return (
    <div className={styles.container}>
      {getIcon()}
    </div>
  )
};
