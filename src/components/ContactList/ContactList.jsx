import React from 'react';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.ListStyle}>
    {contacts.map(oneContact => (
      <li className="li" key={oneContact.id}>
        <span className={styles.NameSpan}>{oneContact.name}</span>
        <span className={styles.TelSpan}>{oneContact.number}</span>

        <button
          className={styles.delete}
          type="button"
          name="delete"
          onClick={() => onRemoveContact(oneContact.id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);
// console.log('contacts :>> ', contacts);

export default ContactList;
