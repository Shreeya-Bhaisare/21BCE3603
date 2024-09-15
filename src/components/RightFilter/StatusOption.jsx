import React from 'react';
import styles from './StatusComponent.module.css';

const StatusOption = ({ label, colorClass }) => (
  <div className={styles.statusOption}>
    <span className={`${styles.statusIndicator} ${styles[colorClass]}`} aria-hidden="true" />
    <span>{label}</span>
  </div>
);

export default StatusOption;