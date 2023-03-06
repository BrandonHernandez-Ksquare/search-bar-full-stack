// @ts-ignore
import GameStop from '@/assets/GameStop.png';
import styles from './SearchBar.module.css';
import React from 'react';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function SearchBar({ onChange } : Props): JSX.Element {
  return (
    <div className={styles.SearchBar}>
      <img src={GameStop} />
      <input type="text" placeholder="Nintendo, The Legend of Zelda, 1997..." onChange={onChange} />
    </div>
  )
}


export default SearchBar;
