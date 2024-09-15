import React from 'react';
import styles from './OwnersList.module.css';
import SearchBar from './SearchBar';
import OwnerItem from './OwnerItem';

const OwnersList = () => {
  const owners = [
    { name: 'Tesla, Inc.', firms: ['LEGALFORCE RAPC.', 'SpaceX Inc.', 'SpaceX Inc.'] },
  ];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.tabList} role="tablist">
            <li role="tab" aria-selected="true" className={styles.activeTab}>Owners</li>
            <li role="tab" aria-selected="false">Law Firms</li>
            <li role="tab" aria-selected="false">Attorneys</li>
          </ul>
        </nav>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/857eb230ca2ec310e792aa6c788334b773133239a5b1531c85feb79af907a481?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" alt="" className={styles.logo} />
      </header>
      <SearchBar />
      <div className={styles.ownersList}>
        {owners.map((owner, index) => (
          <OwnerItem key={index} owner={owner} />
        ))}
        <div className={styles.scrollIndicator} role="scrollbar" aria-orientation="vertical" />
      </div>
    </section>
  );
};

export default OwnersList;