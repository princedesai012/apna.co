import React from 'react';
import styles from './Sidebar.module.css';
import { FaCheckCircle } from 'react-icons/fa'; // From react-icons

const Sidebar = () => {
  const features = [
    "AI Interviewer",
    "Instant feedback",
    "Unlimited attempts",
    "Industry-specific questions"
  ];

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Start your free mock interview</h3>
      <div className={styles.priceSection}>
        <span className={styles.strikethrough}>₹999</span>
        <span className={styles.price}>Free</span>
        <span className={styles.discount}>100% OFF</span>
      </div>
      <button className={styles.ctaButton}>Start Practicing Now</button>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index}>
            <FaCheckCircle className={styles.checkIcon} /> {feature}
          </li>
        ))}
      </ul>
      <div className={styles.trustedBy}>
        <p>Trusted by professionals from</p>
        {/* You can add company logos here */}
      </div>
    </aside>
  );
};

export default Sidebar;