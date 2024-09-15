import React from 'react';
import styles from './PreferencesDisplay.module.css';

const ViewOption = ({ children, className }) => (
  <button className={className} tabIndex="0">
    {children}
  </button>
);

const PreferencesDisplay = () => {
  return (
    <section className={styles.preferences}>
      <h2 className={styles.displayTitle}>Display</h2>
      <div className={styles.viewOptions}>
        <ViewOption className={styles.gridView}>Grid View</ViewOption>
        <ViewOption className={styles.listView}>List View</ViewOption>
      </div>
    </section>
  );
};

export default PreferencesDisplay;