import { useState } from 'react';
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

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/" className="ml-5">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-5" navbar>
            <NavItem className="mr-4 mt-4 mb-2">
              <NavLink href="/components/" className={styles.navLink}><span className={styles.navNum}>01.</span> About</NavLink>
            </NavItem>
            <NavItem className="mr-4 mt-4 mb-2">
              <NavLink href="/components/" className={styles.navLink}><span className={styles.navNum}>02.</span> Experience</NavLink>
            </NavItem>
            <NavItem className="mr-4 mt-4 mb-2">
              <NavLink href="/components/" className={styles.navLink}><span className={styles.navNum}>03.</span> Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}