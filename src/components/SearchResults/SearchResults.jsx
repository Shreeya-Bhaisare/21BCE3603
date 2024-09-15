import React from 'react';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  const suggestions = ['nike*', '*ike'];

  return (
    <section className={styles.searchResults}>
      <h2 className={styles.resultCount}>About 159 Trademarks found for "nike"</h2>
      <div className={styles.divider} />
      <div className={styles.resultsContent}>
        <div className={styles.suggestionsWrapper}>
          <div className={styles.suggestionsLabel}>Also try searching for</div>
          <div className={styles.suggestionTags}>
            {suggestions.map((suggestion, index) => (
              <div key={index} className={styles.suggestionTag}>{suggestion}</div>
            ))}
          </div>
        </div>
        {/* <div className={styles.actionButtons}>
          <div className={styles.logoWrapper}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/899e8220f20194fdce64407caceb23a52c89e6d7ffc192382521d8c12455319c?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" className={styles.logo} alt="Logo" />
          </div>
          <div className={styles.actionButton}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8065167a94016f2b9e481c50b52a1e0fa01f979b0531cee0ec524e6b287f587?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" className={styles.actionButtonIcon} alt="" />
            <div className={styles.actionButtonBackground} />
          </div>
          <div className={styles.actionButton}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5406dc42f3f6eb006ff647beba4497febe327551ef837f140b514c6dc8794523?placeholderIfAbsent=true&apiKey=9344d7ab1c3b4e3c8bc301a39dd3cb6e" className={styles.actionButtonIcon} alt="" />
            <div className={styles.actionButtonBackground} />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SearchResults;