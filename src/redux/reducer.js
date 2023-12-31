// import { combineReducers } from 'redux';
const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      const updatePhonebook = [...state, action.payload];

      return updatePhonebook;

    case 'contacts/deleteContact':
      const withoutRemovedContact = state.filter(
        contact => contact.id !== action.payload
      );

      return withoutRemovedContact;
    default:
      return state;
  }
};
const filtersInitialState = {
  input: '',
};
export const filterReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'contacts/filter':
      return {
        input: action.payload,
      };
    default:
      return state;
  }
};

// Код редюсерів contactReducer та filtersReducer

// export const rootReducer = combineReducers(
//   contacts: contactsReducer,
//   filters: filterReducer,
// );
