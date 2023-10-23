import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';

const ContactList = () => {
  const filters = useSelector(state => state.filters);
  const contacts = useSelector(state => state.contacts);
  localStorage.setItem('user-contact', JSON.stringify(contacts));
  console.log('contacts', contacts);
  console.log('filters', filters);

  const contactss = JSON.parse(localStorage.getItem('user-contact'));

  console.log('contactss', contactss);
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
    <ul>
      {visibleFilter.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
