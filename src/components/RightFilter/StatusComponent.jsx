import React from 'react';
import styles from './StatusComponent.module.css';
import StatusOption from './StatusOption';

const statusOptions = [
  { label: 'Registered', colorClass: 'registered' },
  { label: 'Pending', colorClass: 'pending' },
  { label: 'Abandoned', colorClass: 'abandoned' },
  { label: 'Others', colorClass: 'others' }
];

const StatusComponent = () => {
  return (
    <section className={styles.statusContainer}>
      <h2 className={styles.statusTitle}>Status</h2>
      <div className={styles.statusOptions}>
        <div className={styles.allOption} tabIndex="0" role="button">All</div>
        {statusOptions.map((option, index) => (
          <StatusOption key={index} label={option.label} colorClass={option.colorClass} />
        ))}
      </div>
    </section>
  );
};

export default StatusComponent;