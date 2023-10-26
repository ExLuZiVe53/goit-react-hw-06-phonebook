import { useDispatch } from 'react-redux';

import css from './Filter.module.css';
import { setFilter } from 'redux/filtersSlice';

export const Filter = () => {
  // створює функію вантажівку, яка донесе інструкрію за допомогою хуків
  const dispatch = useDispatch();

  const handleFind = event => {
    dispatch(setFilter(event.target.value));
  };

  // const Myfilter = useSelector(setFilter);
  return (
    <div className={css.FilterWrap}>
      <label>Find contacts by name</label>
      <input
        name="filter"
        type="text"
        // value={setFilter}
        onChange={handleFind}
        className={css.FilterInput}
        placeholder="Find with me"
      />
    </div>
  );
};
