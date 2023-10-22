// Створюємо початковий стейт

const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // ім'я слайсу
  name: 'contactsSlice',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    addContact(state, action) {
      // state.contacts.push(action.payload);
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      // const deletedContactIndex = state.contacts.findIndex(contact => conact.id === action.payload);
      // state.contacts.splice(deletedContacttIndex, 1);
    },
  },
});

// Генератори екшенів
export const { setContacts, setFilter, setError, addContact, deleteContact } =
  contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
