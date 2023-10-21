import React from 'react';
import styles from './Filter.module.css';

export function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.FilterWrap}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={event => onChangeFilter(event.target.value)}
        className={styles.FilterInput}
        placeholder="Search"
      />
    </div>
  );
}
