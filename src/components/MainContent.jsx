import React from 'react';
import styles from './MainContent.module.css';
import iciciLogo from '../assets/icici-bank.png'; // Make sure you have this
import { FaUserClock, FaBrain, FaChartLine } from 'react-icons/fa';
import FaqSection from './FaqSection';

// You can create a reusable component for this feature list
const Feature = ({ icon, title, description }) => (
  <div className={styles.feature}>
    <div className={styles.featureIcon}>{icon}</div>
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      {/* Breadcrumbs can be a separate component */}
      <div className={styles.breadcrumbs}>
        Interview Prep  Mock Interview  ICICI Bank  Head of Field Sales
      </div>

      <h1 className={styles.mainHeading}>Mock Interview</h1>
      <div className={styles.subHeading}>
        <img src={iciciLogo} alt="ICICI Bank" className={styles.companyLogo} />
        <h2>ICICI Bank - Head of Field Sales</h2>
      </div>

      <p className={styles.description}>
        Practice your interview skills for the Head of Field Sales role at ICICI Bank. Our AI-powered mock interview will help you prepare and get confident.
      </p>

      <section className={styles.whatYouGet}>
        <h3>What you'll get</h3>
        <div className={styles.featuresGrid}>
            <Feature 
                icon={<FaUserClock size={24} />}
                title="Real-time interview experience"
                description="Answer questions just like in a real interview."
            />
            <Feature 
                icon={<FaBrain size={24} />}
                title="AI-powered analysis"
                description="Get instant, unbiased feedback on your answers."
            />
            <Feature 
                icon={<FaChartLine size={24} />}
                title="Expert feedback & guidance"
                description="Learn from detailed reports and improve your performance."
            />
        </div>
      </section>

      <section className={styles.about}>
        <h3>About the interview</h3>
        <p>This mock interview is designed to simulate the real interview process for a Head of Field Sales at ICICI Bank. It will cover a range of topics including leadership, sales strategy, team management, and situational judgement questions.</p>
      </section>

      <FaqSection />
    </main>
  );
};

export default MainContent;