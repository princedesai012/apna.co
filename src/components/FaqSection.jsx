import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

// This could be its own component file
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    { q: "Is this mock interview really free?", a: "Yes, this mock interview is completely free. You can practice as many times as you like." },
    { q: "How is the feedback generated?", a: "Our advanced AI analyzes your speech, confidence, and the content of your answers to provide comprehensive feedback." },
    { q: "What kind of questions will be asked?", a: "The questions are tailored to the Head of Field Sales role at ICICI Bank, focusing on skills required for the job." },
  ];

  return (
    <section className={styles.faqSection}>
      <h3>Frequently Asked Questions</h3>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;