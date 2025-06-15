import React, { useState } from 'react';
import styles from './Header.module.css';
import apnaLogo from '../assets/apna-logo.svg';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src={apnaLogo} alt="apna logo" className={styles.logo} />
          
          {/* Desktop Navigation */}
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

          {/* Desktop Actions */}
          <div className={styles.actions}>
            <div className={styles.searchBar}>
              <FaSearch className={styles.searchIcon} />
              <input type="text" placeholder="Search jobs by title, comp..." />
            </div>
            <a href="#" className={styles.employerLink}>Employer Login</a>
            <button className={styles.candidateButton}>Candidate Login</button>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            className={`${styles.hamburgerButton} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          {/* Mobile Navigation Menu */}
          <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
            <div className={styles.mobileNavContent}>
              <nav className={styles.mobileNavLinks}>
                <a href="#" onClick={closeMobileMenu}>
                  Jobs <FaChevronDown size={12} />
                </a>
                <a href="#" onClick={closeMobileMenu}>
                  Job Prep <span className={styles.newTag}>NEW</span>
                </a>
                <a href="#" onClick={closeMobileMenu}>
                  Contests <span className={styles.newTag}>NEW</span>
                </a>
                <a href="#" onClick={closeMobileMenu}>
                  Degree <span className={styles.newTag}>NEW</span>
                </a>
                <a href="#" onClick={closeMobileMenu}>
                  Resume Tools <FaChevronDown size={12} />
                </a>
              </nav>

              <div className={styles.mobileActions}>
                <div className={styles.mobileSearchBar}>
                  <FaSearch className={styles.searchIcon} />
                  <input type="text" placeholder="Search jobs by title, company..." />
                </div>
                <a href="#" className={styles.mobileEmployerLink} onClick={closeMobileMenu}>
                  Employer Login
                </a>
                <button className={styles.mobileCandidateButton} onClick={closeMobileMenu}>
                  Candidate Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <div 
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Header;