import React, {useState} from 'react'
import styles from './App.module.css'
import PreviewOutlet from '@/components/PreviewOutlet';
import SearchBar from '@/components/SearchBar';

function App(): JSX.Element {

  const [searcValue, setSearchValue] = useState();
  const [results, setResults] = useState();
  // I was about to start with this but ran out of time



  return (
    <div className={styles.App}>
     <SearchBar />
     <PreviewOutlet data={[]} />
    </div>
  )
}

export default App
