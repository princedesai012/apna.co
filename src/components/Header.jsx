import React from 'react';
import styles from './Header.module.css';
import apnaLogo from '../assets/apna-logo.svg';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={apnaLogo} alt="apna logo" className={styles.logo} />
        
        <nav className={styles.nav}>
          <a href="#">
            Jobs <FaChevronDown size={12} />
          </a>
          <a href="#">
            Job Prep <span className={styles.newTag}>NEW</span>
          </a>
          <a href="#">
            Contests <span className={styles.newTag}>NEW</span>
          </a>
          <a href="#">
            Degree <span className={styles.newTag}>NEW</span>
          </a>
          <a href="#">
            Resume Tools <FaChevronDown size={12} />
          </a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input type="text" placeholder="Search jobs by title, comp..." />
          </div>
          <a href="#" className={styles.employerLink}>Employer Login</a>
          <button className={styles.candidateButton}>Candidate Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
