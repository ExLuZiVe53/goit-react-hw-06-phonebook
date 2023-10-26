import { createSlice } from '@reduxjs/toolkit';

const filtersSlise = createSlice({
  name: 'filters',
  initialState: { filter: '' },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filtersSlise.actions;
export const filtersReducer = filtersSlise.reducer;
