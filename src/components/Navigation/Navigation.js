import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { navItems } from '../../shared/constants';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import styles from './Navigation.module.css';

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
              <img className={styles.togglerIcon} src="/imgs/navigation/close.svg" alt=""/>
            ) : (
              <img className={styles.togglerIcon} src="/imgs/navigation/bars.svg" alt=""/>
            )
          }
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-5 mt-3 mb-3" navbar>
            {navItems.map(({ to, num, name }, index) => (
              <Link to={to} smooth={true} offset={-150} duration={750} key={index}>
                <NavItem className="ml-4">
                  <NavLink className={styles.navLink}>
                    <span className={styles.navNum}>{num}</span> {name}
                  </NavLink>
                </NavItem>
              </Link>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}