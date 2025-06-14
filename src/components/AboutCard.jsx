import React from 'react';
import styles from './Card.module.css'; // Reuse the generic card styles

const AboutCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>About this interview</h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        Get an opportunity to get interviewed for (ICIC) Bank's Head of Field Sales. Together with technical questions, get insights about company values and culture.
      </p>
    </div>
  );
};

export default AboutCard;