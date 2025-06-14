import React from 'react';
import styles from './Card.module.css'; // We'll use a generic card style
import { FaGraduationCap, FaHeart, FaStar } from 'react-icons/fa';

const RatingsCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Ratings & Reviews</h3>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <FaGraduationCap color="#7B2CBF" />
          <span><b>246</b> Preps</span>
        </div>
        <div className={styles.statItem}>
          <FaHeart color="#E53E3E" />
          <span><b>82%</b> Found helpful</span>
        </div>
        <div className={styles.statItem}>
          <FaStar color="#F59E0B" />
          <span><b>81</b> Reviews</span>
        </div>
      </div>
      <p className={styles.slotAvailable}>10 mins interview slot available</p>
      <button className={styles.ctaButton}>Start Interview</button>
    </div>
  );
};

export default RatingsCard;