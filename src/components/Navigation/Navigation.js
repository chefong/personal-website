import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
/* istanbul ignore next */
import Lottie from 'lottie-react';
import { navItems } from '../../shared/constants';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import styles from './Navigation.module.css';
import menuAnimation from './menu-animation.json';

const lottieProps = {
  loop: false,
  autoplay: false,
  animationData: menuAnimation
};

// Segment frames for menu open and close
const menuOpenSegments = [30, 70];
const menuCloseSegments = [100, 140];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuIconEl = useRef(null);

  const toggle = () => {
    if (isOpen) {
      menuIconEl.current.playSegments(menuCloseSegments, true);
      setIsOpen(false);
    } else {
      menuIconEl.current.playSegments(menuOpenSegments, true);
      setIsOpen(true);
    }
  };

  /* istanbul ignore next */
  useEffect(() => window.addEventListener('scroll', () => setScrollPosition(window.scrollY)), []);

  return (
    <div data-testid="Navigation-container">
      <Navbar
        light
        expand="md"
        fixed="top"
        className={styles.navbar}
        style={{
          boxShadow: (scrollPosition > 0 || isOpen) ? "0px 4px 28px rgba(0, 0, 0, 0.06)" : "none",
          transition: "all 0.5s ease"
        }}
      >
        <NavbarBrand href="/" className="ml-2">
          <img className={styles.logo} src="/imgs/logo.svg" alt=""/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={styles.toggler} data-testid="Navigation-toggle">
          <Lottie
            {...lottieProps}
            lottieRef={menuIconEl}
            className={styles.menuIcon}
          />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar data-testid="Navigation-collapse">
          <Nav className="ml-auto mr-5 mt-3 mb-3" navbar>
            {navItems.map(({ to, num, name }, index) => (
              <NavItem className="ml-4 mt-2 mb-2" key={index} data-testid="Navigation-item">
                <Link smooth className={styles.navLink} to={to} offset={-150} duration={750}>
                  <span className={styles.navNum}>{num}</span> {name}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}