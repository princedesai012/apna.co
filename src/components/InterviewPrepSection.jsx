import React, { useState } from 'react';
import styles from './InterviewPrepSection.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Data for the tabs and questions
const prepData = {
  technical: [
    { q: "How do you drive sales in a competitive market?", a: "By focusing on a strong value proposition, building key relationships, and leveraging data to identify niche opportunities. It's also crucial to empower the sales team with the right tools and training." },
    { q: "What CRM tools have you used effectively?", a: "I have extensive experience with Salesforce and HubSpot. I've used them to manage sales pipelines, track customer interactions, and generate insightful reports to guide strategy." },
    { q: "How do you manage a large sales team?", a: "Management of a large team involves clear communication, setting achievable targets, providing regular feedback, and fostering a collaborative and motivated environment." },
    { q: "Explain your approach to sales forecasting.", a: "My approach combines historical data analysis, pipeline-based projections, and qualitative input from the sales team to create a realistic and accurate forecast." },
  ],
  behavioural: [
    { q: "Describe a time you led a sales turnaround.", a: "Answer for behavioural question 1..." },
    { q: "How do you handle underperforming team members?", a: "Answer for behavioural question 2..." },
  ],
  'mission-vision': [
    { q: "How do you align with ICICI Bank's customer focus?", a: "I prioritize understanding customer needs and delivering personalized solutions. This approach aligns with ICICI Bank's commitment to customer-centric services and long-term relationships." },
    { q: "What attracts you to ICICI Bank's culture?", a: "Answer for mission-vision question 2..." },
  ],
};

const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className={styles.accordionItem}>
    <button className={styles.questionButton} onClick={onClick}>
      <span>{item.q}</span>
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>
    {isOpen && <div className={styles.answer}>{item.a}</div>}
  </div>
);

const InterviewPrepSection = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className={styles.prepSection}>
      <h3>Prepare for the Interview</h3>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'technical' ? styles.active : ''}
          onClick={() => { setActiveTab('technical'); setOpenAccordion(null); }}
        >
          Technical
        </button>
        <button
          className={activeTab === 'behavioural' ? styles.active : ''}
          onClick={() => { setActiveTab('behavioural'); setOpenAccordion(null); }}
        >
          Behavioural
        </button>
        <button
          className={activeTab === 'mission-vision' ? styles.active : ''}
          onClick={() => { setActiveTab('mission-vision'); setOpenAccordion(null); }}
        >
          Mission-vision
        </button>
      </div>
      <div className={styles.accordion}>
        {prepData[activeTab].map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openAccordion === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default InterviewPrepSection;