import React from 'react'
import styles from './App.module.css'
import PreviewOutlet from '@/components/PreviewOutlet';
import SearchBar from '@/components/SearchBar';

function App(): JSX.Element {
  return (
    <div className={styles.App}>
     <SearchBar />
     <PreviewOutlet data={[]} />
    </div>
  )
}

export default App
