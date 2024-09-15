import React from 'react'; 
import Header from './components/Header/header';
import SearchResults from './components/SearchResults/SearchResults';
import TrademarkDetails from './components/TrademarkDetails/TrademarkDetails';
import StatusComponent from './components/RightFilter/StatusComponent';
import OwnerList from './components/RightFilter/OwnerList'; 
import PreferenceDisplay from './components/RightFilter/PrefencesDisplay'; 
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.searchResultsContainer}>
            <SearchResults />
          </div>
          
          <div className='align'>
            <div className={styles.trademarkDetailsContainer}>
                <TrademarkDetails />

            </div>
            <div className={styles.rightColumn}>
                <StatusComponent />
                <OwnerList/>
                <PreferenceDisplay/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
