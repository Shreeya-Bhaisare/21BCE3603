import React from 'react';
import styles from './TrademarkDetails.module.css';
import ClassItem from './ClassItem';

const TrademarkDetails = () => {
  const headerItems = ['Mark', 'Details', 'Status', 'Class/Description'];
  const classItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34c70b05ff613f11f512a3d5e90cb81f927c0651a2b4df77c82c4df6b446aacc?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e', name: 'Class 45' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2de2dd9c308038b4578e07a9ea0af496bb904023369956b84adc57161c684e20?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e', name: 'Class 8' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a1d223d455fc9dd8b880f085b67dd2e33d2444d450fd5dcd27398069a4cb1dc9?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e', name: 'Class 8' },
  ];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        {headerItems.map((item, index) => (
          <div key={index} className={styles.headerItem}>{item}</div>
        ))}
      </header>
      <div className={styles.divider} />
      <div className={styles.content}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68b4084f1fc1d18f06350ae58cc547615133bb5dd865607b4cbdd2ba13b22e4d?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" className={styles.logo} alt="Company logo" />
        <div className={styles.companyInfo}>
          <h2 className={styles.companyName}>Meta Logo</h2>
          <p className={styles.companyDescription}>FACEBOOK INC.</p>
          <p className={styles.registrationNumber}>88713620</p>
          <p className={styles.registrationDate}>26th Jan 2020</p>
        </div>
        <div className={styles.statusWrapper}>
          <div className={styles.statusInfo}>
            <div className={styles.statusLabel}>
              <div className={styles.statusIndicator} />
              <div className={styles.statusText}>Live/Registered</div>
            </div>
            <p className={styles.statusDate}>
              <span>on </span>
              <strong>26 Jun 2020</strong>
            </p>
          </div>
        </div>
        <div className={styles.statusContainer}>
          <p className={styles.classDescription}>
            Computer services, Social Media, Networking, Virtual Communities, Community
          </p>
        </div>
        {/* <div className={styles.additionalInfo}>
          <div className={styles.expirationDate}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ab77e6294c0985caf009f206c8e8613c142a06591fc15d88b89b209146af4?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" className={styles.expirationIcon} alt="" />
            <div className={styles.expirationText}>26 Dec 2027</div>
          </div>
          <div className={styles.classInfo}>
            {classItems.map((item, index) => (
              <ClassItem key={index} icon={item.icon} name={item.name} />
            ))}
            <div className={styles.moreClasses}>...</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrademarkDetails;