import React from 'react';
import styles from './BenefitsSection.module.css';

const BenefitsSection = () => {
    return (
        <div className={styles.benefitsSection}>
            <h3>After this interview, You'll get</h3>
            <div className={styles.benefitList}>
                <div className={styles.benefitItem}>Get an Interview Score and Rating amongst all the candidates</div>
                <div className={styles.benefitItem}>Detailed Analysis and Feedback on how the interview went</div>
                <div className={styles.benefitItem}>Question wise tips to improve your answers and deliver next time</div>
            </div>
        </div>
    );
};

export default BenefitsSection;