import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlise';

import css from './ContactForm.module.css';

// import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const [name, setName] = useState(' ');
  const [number, setNumber] = useState(' ');
  const dispatch = useDispatch();
  //стейт для данних ім"я та номеру
  // const contactsStore = useSelector()
  // state = {
  //   name: '',
  //   number: '',
  // };
  //Слухач інпутів
  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };
  //Сабміт форми
  const handleSabmit = e => {
    // Cкидую налаштування
    e.preventDefault();
    // Записую значення з імпуту до об"єкту

    const haveNameInPhonebook = JSON.parse(
      localStorage.getItem('user-contact')
    ).some(
      ({ name }) =>
        name.toLowerCase() === e.currentTarget.name.value.toLowerCase()
    );
    if (haveNameInPhonebook) {
      return alert(`${e.currentTarget.name.value} is already in contacts`);
    }
    dispatch(addContact(name, number));
    // Оновлюю інпут
    setName('');
    setNumber('');
  };

  return (
    <form className={css.FormWrapper} onSubmit={handleSabmit}>
      <div>
        <label className={css.FormLabel} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          className={css.FormInput}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className={css.FormLabel} htmlFor="number">
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          className={css.FormInput}
          placeholder="Enter your number"
        />
      </div>
      <button className={css.ButtonForm} type="submit">
        add contacts
      </button>
    </form>
  );
};
