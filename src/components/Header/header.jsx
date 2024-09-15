import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.contactInfo}>
          <div className={styles.contactLinks}>
            <div className={styles.contactLinksWrapper}>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/625e3f564789bb50625030d4cc1b7641e67113ee8c8d78fbe6399ec79870773a?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" className={styles.logo} alt="Company Logo" />
          </div>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.searchBar}>
            <div className={styles.searchInputWrapper}>
              <div className={styles.searchInputContent}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/060adcd28cb70a8051aceca00ef04444fb8be7d06c9fda4eceff3cb49260fd89?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" className={styles.searchIcon} alt="" />
                <label htmlFor="searchInput" className="visually-hidden">Search Trademark Here</label>
                
              </div>
            </div>
          </div>
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>
      <div className={styles.headerDivider} />
    </header>
  );
};

export default Header;