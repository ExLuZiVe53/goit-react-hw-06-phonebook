import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './contactsSlise';
import { filtersReducer } from './filtersSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: { contacts: persistedContactsReducer, filters: filtersReducer },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// configureStore приймає об'єкт опцій

export const persistor = persistStore(store);
