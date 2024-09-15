import React from 'react';
import styles from './TrademarkDetails.module.css';

const ClassItem = ({ icon, name }) => {
  return (
    <div className={styles.classItem}>
      <img loading="lazy" src={icon} className={styles.classIcon} alt="" />
      <div className={styles.className}>{name}</div>
    </div>
  );
};

export default ClassItem;