import React from 'react';
import InterviewHero from '../components/InterviewHero';
import AboutCard from '../components/AboutCard';
import CheatsheetSection from '../components/CheatsheetSection';
import InterviewPrepSection from '../components/InterviewPrepSection';
import BenefitsSection from '../components/BenefitsSection';
import styles from './InterviewPage.module.css';

const InterviewPage = () => {
  return (
    // This <main> element is what we're targeting with the CSS fix
    <main className={styles.mainContent}>
      <InterviewHero /> {/* This should be the purple gradient bar */}
      <AboutCard />
      <CheatsheetSection />
      <InterviewPrepSection />
      <BenefitsSection />
    </main>
  );
};

export default InterviewPage;