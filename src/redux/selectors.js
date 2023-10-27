// import { useSelector } from 'react-redux';

// export const SelectorsContacts = () => {
//   const filter = useSelector(state => {
//     return state.filter;
//   });
// };

// export const SelectorsFilter = () => {
//   const contacts = useSelector(state => {
//     return state.contacts.contacts;
//   });
// };

export const getContacts = state => state.contacts.contacts;
export const getNumber = state => state.contacts.number;
