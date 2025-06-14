import React from 'react';
import styles from './CheatsheetSection.module.css';
import { FaLock } from 'react-icons/fa';

// A small sub-component for each card
const CheatsheetCard = ({ question, answer, isLocked }) => {
  return (
    <div className={styles.card}>
      {isLocked ? (
        <>
          <div className={styles.lockedContent}>
            <p className={styles.questionText}>{question}</p>
          </div>
          <div className={styles.lockedOverlay}>
            <FaLock />
            <h4>Locked</h4>
            <p>This will get unlocked after your interview is completed.</p>
          </div>
        </>
      ) : (
        <>
          <p className={styles.questionText}>{question}</p>
          <p className={styles.answerText}>{answer}</p>
        </>
      )}
    </div>
  );
};

const CheatsheetSection = () => {
  return (
    <div className={styles.cheatsheetSection}>
      <h3>Personalised Interview Cheatsheets</h3>
      <p className={styles.subtitle}>Based on your profile</p>
      <div className={styles.cardGrid}>
        <CheatsheetCard
          question="Question: Tell me about a time when you had to solve a compl..."
          answer="In my previous role at XYZ Corp, I was tasked with optimising our customer onboarding process which was seeing significant drop-offs."
        />
        <CheatsheetCard
          question="Question: How would you design a distributed cache system?"
          isLocked={true}
        />
        <CheatsheetCard
          question="Question: How would you design a distributed cache system?"
          isLocked={true}
        />
      </div>
    </div>
  );
};

export default CheatsheetSection;