import React from 'react';
import RatingsCard from './RatingsCard';
import ShareCard from './ShareCard';
import styles from './InterviewSidebar.module.css';

const InterviewSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <RatingsCard />
      <ShareCard />
    </aside>
  );
};

export default InterviewSidebar;