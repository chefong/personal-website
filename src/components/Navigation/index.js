import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Lottie from 'lottie-react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import styles from './styles.module.scss';
import ThemeToggle from '~/components/ThemeToggle';
import { logToGA } from '~/common/utils/ga';
import hamburgerMenuAnimation from '~/assets/menu-animation.json';
import navItems from '~/common/constants/navItems';

const lottieProps = {
    loop: false,
    autoplay: false,
    animationData: hamburgerMenuAnimation,
};

const reactScrollLinkProps = {
    smooth: true,
    offset: -150,
    duration: 750,
};

// Segment frames for menu open and close
const menuOpenSegments = [30, 70];
const menuCloseSegments = [100, 140];

// Box shadow styling for when the nav menu is open
const menuBoxShadow = '0px 4px 28px rgba(0, 0, 0, 0.06)';

// Menu transition styling for menu
const menuTransition = 'all 0.5s ease';

export default function Navigation() {
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

    const logNavItemClick = (clickEventId) => {
        logToGA({ action: clickEventId });
    };

    useEffect(
        () =>
            window.addEventListener('scroll', () =>
                setScrollPosition(window.scrollY),
            ),
        [],
    );

    return (
        <div data-testid="Navigation-container">
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
                <NavbarBrand href="/" className="ml-2">
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
                    <Nav
                        className="ml-auto mr-5 justify-content-center align-items-md-center"
                        navbar
                    >
                        {navItems.map(({ to, num, name, clickEventId }) => (
                            <NavItem
                                className="ml-sm-3 ml-md-5 mt-2 mb-2"
                                key={name}
                                data-testid="Navigation-item"
                            >
                                <Link
                                    {...reactScrollLinkProps}
                                    className={styles.navLink}
                                    to={to}
                                    onClick={() =>
                                        logNavItemClick(clickEventId)
                                    }
                                >
                                    <span className={styles.navNum}>{num}</span>{' '}
                                    {name}
                                </Link>
                            </NavItem>
                        ))}
                        <NavItem className={`${styles.toggle} ml-sm-3 ml-md-5`}>
                            <ThemeToggle />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
