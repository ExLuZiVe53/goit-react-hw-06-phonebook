import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const InitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: [],
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: InitialState,
  reducers: {
    addContact: (state, action) => {
      const haveNameInPhonebook = state.contacts.find(
        ({ name }) => name === action.payload.name
      );
      if (haveNameInPhonebook) {
        return alert(`${action.payload.name} is already in contacts`);
      }

      state.contacts.push(action.payload);
    },
    prepare(name, number) {
      return {
        payload: {
          id: nanoid(),
          name,
          number,
        },
      };
    },

    deleteContact: (state, action) => {
      const withoutRemovedContact = state.contacts.filter(
        contact => contact.id !== action.payload
      );

      return withoutRemovedContact;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
const persistConfig = { key: 'contacts', storage };
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlise.reducer
);
export const { addContact, deleteContact } = contactsSlise.actions;
