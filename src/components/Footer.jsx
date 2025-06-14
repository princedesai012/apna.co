import React from 'react';
import styles from './Footer.module.css';
import apnaFooterLogo from '../assets/apna-logo.png';
import qrCode from '../assets/qr-code.png'; // ✅ Updated QR Code
import playStore from '../assets/google-play-badge.png'; // ✅ Updated Play Store Badge
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>

          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.topSection}>
              <div className={styles.logoWrapper}>
                <img src={apnaFooterLogo} alt="apna" className={styles.logo} />
              </div>
              <div className={styles.followText}>
                <h4>Follow us on social media</h4>
                <div className={styles.socialIcons}>
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaYoutube /></a>
                </div>
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.bottomBar}>
              <span>© 2025 Apna | All rights reserved</span>
              <div className={styles.links}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.appCard}>
              <h4>Apply on the go</h4>
              <p>Get real time job updates on our App</p>
              <div className={styles.appDownload}>
                <a href="#">
                  <img src={playStore} alt="Get it on Google Play" className={styles.playStoreImg} />
                </a>
                <img src={qrCode} alt="QR Code" className={styles.qrCode} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
