import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';
import css from './ContactList.module.css';

const ContactList = () => {
  const filters = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);
  localStorage.setItem('user-contact', JSON.stringify(contacts));

  const contactss = JSON.parse(localStorage.getItem('user-contact'));

  const visibleFilter = contactss.filter(contact =>
    contact.name.toLowerCase().includes(filters)
  );
  useEffect(() => {
    localStorage.setItem('user-contact', JSON.stringify(contacts));
  }, [contacts]);

  const dispatch = useDispatch();
  //  const handleDelete = (id)=> {dispatch(deleteContact(id))};
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.ContactUl}>
      {visibleFilter.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}{' '}
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
