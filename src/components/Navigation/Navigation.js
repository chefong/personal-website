import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
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

const openIconPath = "/imgs/navigation/bars.svg";
const closeIconPath = "/imgs/navigation/close.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => window.addEventListener('scroll', () => setScrollPosition(window.scrollY)), []);

  return (
    <div>
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
        <NavbarToggler onClick={toggle} className={`${styles.toggler} mr-2`}>
          {isOpen ? (
              <img className={styles.togglerIcon} src={closeIconPath} alt="Menu"/>
            ) : (
              <img className={styles.togglerIcon} src={openIconPath} alt="Close"/>
            )
          }
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-5 mt-3 mb-3" navbar>
            {navItems.map(({ to, num, name }, index) => (
              <NavItem className="ml-4 mt-2 mb-2" key={index}>
                <Link className={styles.navLink} to={to} smooth={true} offset={-150} duration={750}>
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