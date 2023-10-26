import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => {
    return state.filter;
  });

  const contacts = useSelector(state => {
    return state.contacts.contacts;
  });

  const visibleFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  // const filtredContacts = contacts.filter(({ contact }) =>
  //   contact.toLowerCase().includes(filter.toLowerCase())
  // );

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
