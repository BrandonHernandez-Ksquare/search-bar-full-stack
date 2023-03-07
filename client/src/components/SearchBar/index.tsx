import { SEARCH_BAR_IMAGE_URL } from '@/commons/constants';
import styles from './SearchBar.module.css';
import React from 'react';

interface Props {}

function SearchBar({ } : Props): JSX.Element {
  return (
    <div className={styles.SearchBar}>
      <img src={SEARCH_BAR_IMAGE_URL} />
      <input type="text" placeholder="Nintendo, The Legend of Zelda, 1997..." />
    </div>
  )
}


export default SearchBar;
