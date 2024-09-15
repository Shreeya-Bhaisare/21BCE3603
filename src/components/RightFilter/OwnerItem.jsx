import React from 'react';
import styles from './OwnersList.module.css';

const OwnerItem = ({ owner }) => {
  return (
    <div className={styles.ownerItem}>
      <div className={styles.activePadding} />
      <div className={styles.ownerDetails}>
        <div className={styles.ownerName}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f471321fb254c1c83c9c20ad7ca0ddc86f3d0894c77400db6a37f23649a3eb81?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" alt="" className={styles.ownerIcon} />
          <span>{owner.name}</span>
        </div>
        {owner.firms.map((firm, index) => (
          <div key={index} className={styles.ownerName}>
            <div className={styles.checkbox} role="checkbox" aria-checked="false" tabIndex="0" />
            <span>{firm}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerItem;