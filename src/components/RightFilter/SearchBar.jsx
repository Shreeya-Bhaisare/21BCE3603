import React from 'react';
import styles from './OwnersList.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0acf4206a078e03a07bb5be3e6193df599cfc1a3f18ce228a87093b2fdfcf7?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" alt="" className={styles.searchIcon} />
      <label htmlFor="ownerSearch" className={styles['visually-hidden']}>Search Owners</label>
      <input
        type="text"
        id="ownerSearch"
        placeholder="Search Owners"
        aria-label="Search Owners"
      />
    </div>
  );
};

export default SearchBar;