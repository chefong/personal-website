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
          boxShadow: scrollPosition > 16 ? "0px 4px 28px rgba(0, 0, 0, 0.06)" : "none",
          transition: "all 0.5s ease"
        }}
      >
        <NavbarBrand href="/" className="ml-5">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-5 mt-3 mb-3" navbar>
            {navItems.map(({ to, num, name }) => (
              <Link to={to} smooth={true} offset={-150} duration={750}>
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