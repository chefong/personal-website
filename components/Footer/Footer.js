import React from 'react';
import styles from './Footer.module.css';
import { footerText } from '../../content';

const Footer = () => <div className={styles.container}>{footerText.description}</div>;

export default Footer;