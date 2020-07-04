import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { navigationItems, scrollOffsetDesktop, scrollDuration } from '../../constants';
import { isMobile } from 'react-device-detect';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  NavItem,
  Nav } from 'reactstrap';
import { Link } from 'react-scroll';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen);

  return (
    <div className="container-fluid">
      <Navbar dark fixed="top" expand="md" className={styles.navbar}>
        <NavbarToggler onClick={toggle} className="toggler"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto">
            {navigationItems.map(({ to, href, label }) => {
              return (
                <NavItem className={styles.item} key={label}>
                  <Link activeClass="active" to={to} spy smooth offset={isMobile ? 10 : scrollOffsetDesktop} duration={scrollDuration}>
                    <NavLink href={href} className={styles.navlink}>{label}</NavLink>
                  </Link>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;