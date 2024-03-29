import { useContext } from 'react';
import { SunnyOutline, MoonOutline, CafeOutline } from 'react-ionicons';
import styles from './styles.module.scss';
import { store } from '~/store/GlobalProvider';
import actions from '~/store/actions';
import { logToGA } from '~/common/utils/ga';
import colors from '~/common/constants/colors';
import gaEvents from '~/common/constants/gaEvents';

const iconColors = {
    light: colors.dark,
    dark: colors.light,
    tan: colors.dark,
};

const themeOrder = ['light', 'tan', 'dark'];

const iconSize = '28px';

export default function ThemeToggle() {
    const { state, dispatch } = useContext(store);
    const { theme } = state;
    const iconColor = iconColors[theme];

    const handleToggleClick = () => {
        logToGA({ action: gaEvents.THEME_TOGGLE_CLICKED });

        let nextThemeIndex = themeOrder.indexOf(theme) + 1;
        if (nextThemeIndex === themeOrder.length) nextThemeIndex = 0;

        const nextTheme = themeOrder[nextThemeIndex];

        dispatch({ type: actions.SET_THEME, payload: nextTheme });
        localStorage.setItem('siteTheme', nextTheme);
    };

    const iconProps = {
        className: styles.icon,
        color: iconColor,
        onClick: handleToggleClick,
        height: iconSize,
        width: iconSize,
    };

    const getIcon = () => {
        switch (theme) {
            case 'tan':
                return <CafeOutline {...iconProps} />;
            case 'dark':
                return <MoonOutline {...iconProps} />;
            default:
                return <SunnyOutline {...iconProps} />;
        }
    };

    return <div className={styles.container}>{getIcon()}</div>;
}
