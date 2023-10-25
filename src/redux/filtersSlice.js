import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = { filters: '' };

const filtersSlise = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    filter(state, action) {
      return (state.filters = action.payload);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { filter } = filtersSlise.actions;
export const filtersReducer = filtersSlise.reducer;
