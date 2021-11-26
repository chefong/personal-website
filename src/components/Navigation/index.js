import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import ThemeToggle from '~/components/ThemeToggle';
import { logToGA } from '~/common/utils/ga';
import hamburgerMenuAnimation from '~/assets/menu-animation.json';

const lottieProps = {
    loop: false,
    autoplay: false,
    animationData: hamburgerMenuAnimation,
};

// Segment frames for menu open and close
const menuOpenSegments = [30, 70];
const menuCloseSegments = [100, 140];

// Box shadow styling for when the nav menu is open
const menuBoxShadow = '0px 4px 28px rgba(0, 0, 0, 0.06)';

// Menu transition styling for menu
const menuTransition = 'all 0.5s ease';

// Accounts for the navbar height when scrolling to the section element
const navbarOffset = 112;

export default function Navigation({ navItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const menuIconEl = useRef(null);

    const openMenu = () => {
        menuIconEl.current.playSegments(menuOpenSegments, true);
        setIsOpen(true);
    };

    const closeMenu = () => {
        menuIconEl.current.playSegments(menuCloseSegments, true);
        setIsOpen(false);
    };

    const toggle = () => (isOpen ? closeMenu() : openMenu());

    const handleNavItemClick = (clickEventId, sectionEl) => {
        logToGA({ action: clickEventId });

        closeMenu();

        window.scrollTo({
            top: sectionEl.current?.offsetTop - navbarOffset,
            behavior: 'smooth',
        });
    };

    useEffect(
        () =>
            window.addEventListener('scroll', () =>
                setScrollPosition(window.scrollY),
            ),
        [],
    );

    return (
        <Navbar
            light
            expand="md"
            fixed="top"
            className={styles.navbar}
            style={{
                boxShadow:
                    scrollPosition > 0 || isOpen ? menuBoxShadow : 'none',
                transition: menuTransition,
            }}
        >
            <div className={styles.navbarContainer}>
                <NavbarBrand className={styles.navbarBrand} href="/">
                    <img className={styles.logo} src="/imgs/logo.svg" alt="" />
                </NavbarBrand>
                <NavbarToggler
                    onClick={toggle}
                    className={styles.toggler}
                    data-testid="Navigation-toggle"
                >
                    <Lottie
                        {...lottieProps}
                        lottieRef={menuIconEl}
                        className={styles.menuIcon}
                    />
                </NavbarToggler>
                <Collapse
                    isOpen={isOpen}
                    navbar
                    data-testid="Navigation-collapse"
                >
                    <Nav className={styles.nav} navbar>
                        {navItems.map(({ num, name, clickEventId, ref }) => (
                            <NavItem
                                className={styles.navLink}
                                key={name}
                                data-testid="Navigation-item"
                                onClick={() =>
                                    handleNavItemClick(clickEventId, ref)
                                }
                            >
                                <span className={styles.navNum}>{num}</span>{' '}
                                {name}
                            </NavItem>
                        ))}
                        <NavItem className={styles.toggle}>
                            <ThemeToggle />
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

Navigation.propTypes = {
    navItems: PropTypes.object.isRequired,
};
