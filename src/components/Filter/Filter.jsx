import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filtersSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const [filterok, setFilter] = useState('');

  const handleFind = e => {
    setFilter(e.target.value);
  };
  dispatch(filter(filterok));
  return (
    <div className={css.FilterWrap}>
      <label htmlFor="">
        Find contacts by name
        <input
          name="filter"
          type="text"
          value={filterok}
          onChange={handleFind}
          className={css.FilterInput}
        />
      </label>
    </div>
  );
};
