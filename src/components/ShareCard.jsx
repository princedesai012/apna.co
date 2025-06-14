import React from 'react';
import styles from './Card.module.css';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTimes } from 'react-icons/fa'; // FaTimes for X

const ShareCard = () => {
  const copyLink = () => {
    navigator.clipboard.writeText("https://apna.co/vEWVcFQOaUb");
    alert("Link copied!");
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Share with Friends</h3>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.socialIcon} style={{backgroundColor: '#25D366'}}><FaWhatsapp /></a>
        <a href="#" className={styles.socialIcon} style={{backgroundColor: '#1877F2'}}><FaFacebook /></a>
        <a href="#" className={styles.socialIcon} style={{backgroundColor: '#0A66C2'}}><FaLinkedin /></a>
        <a href="#" className={styles.socialIcon} style={{backgroundColor: '#000000'}}><FaTimes /></a>
      </div>
      <p className={styles.orText}>or copy link</p>
      <div className={styles.copyLinkWrapper}>
        <input type="text" readOnly value="https://apna.co/vEWVcFQOaUb" />
        <button onClick={copyLink}>Copy</button>
      </div>
    </div>
  );
};

export default ShareCard;