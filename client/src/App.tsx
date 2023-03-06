import styles from './App.module.css'
import React, { useEffect, useState } from 'react'
import PreviewOutlet from '@/components/PreviewOutlet';
import useDebounce from '@/hooks/useDebounce';
import { VideoGame } from '@/model/types';
import SearchBar from '@/components/SearchBar';
import { VideoGamesManager } from '@/api/videogames';

function App(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const debouncedValue = useDebounce(searchValue, 500);
  const [results, setResults] = useState<VideoGame[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
      VideoGamesManager.get({ like: debouncedValue })
        .then(setResults)
  }, [debouncedValue]);

  return (
    <div className={styles.App}>
     <SearchBar onChange={handleChange} />
     <PreviewOutlet data={results} />
    </div>
  )
}

export default App
