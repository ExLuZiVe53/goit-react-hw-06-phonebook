import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';
import css from './ContactList.module.css';

const ContactList = () => {
  const filters = useSelector(state => state.contacts.filters);
  const contacts = useSelector(state => {
    console.log(state.contacts.contacts);
    return state.contacts.contacts;
  });
  // localStorage.setItem('user-contact', JSON.stringify(contacts));

  // const contactss = JSON.parse(localStorage.getItem('user-contact'));

  const visibleFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters)
  );

  useEffect(() => {
    // localStorage.setItem('user-contact', JSON.stringify(contacts));
  }, [contacts]);

  const dispatch = useDispatch();
  //  const handleDelete = (id)=> {dispatch(deleteContact(id))};
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.ContactUl}>
      {visibleFilter.map(contact => (
        <li className={css.ContactItem} key={contact.id}>
          <span className={css.ContactName}>{contact.name}</span>-
          <span className={css.ContactNumber}>{contact.number}</span>
          <button
            className={css.delete}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
