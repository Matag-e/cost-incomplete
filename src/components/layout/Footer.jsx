import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.sociallist}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
      <p className={styles.copyright}><span>Mateus</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer