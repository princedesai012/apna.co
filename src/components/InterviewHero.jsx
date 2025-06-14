import React from 'react';
import styles from './InterviewHero.module.css';
import iciciLogo from '../assets/icici-bank.png'; // Make sure you have this

const InterviewHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.logoContainer}>
        <img src={iciciLogo} alt="ICICI Bank Logo" />
      </div>
      <div className={styles.textContainer}>
        <h1>Head of Field Sales</h1>
        <p>at ICICI Bank</p>
      </div>
    </div>
  );
};

export default InterviewHero;