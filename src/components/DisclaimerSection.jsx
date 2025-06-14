import React from 'react';
import styles from './DisclaimerSection.module.css';
import { FaLock } from 'react-icons/fa';
import AiIcon from './AiIcon'; // Import the new icon component

const DisclaimerSection = () => {
  return (
    <div className={styles.disclaimerWrapper}>
      <div className={styles.disclaimerLine}>
        <FaLock className={styles.icon} />
        <p>This is a mock interview for practice purposes only. Your responses and feedback won’t be shared with any recruiters.</p>
      </div>
      <div className={`${styles.disclaimerLine} ${styles.aiLine}`}>
        <p className={styles.aiText}>This page contains AI-generated content, which may occasionally be inaccurate or irrelevant.</p>
        <AiIcon />
      </div>
    </div>
  );
};

export default DisclaimerSection;