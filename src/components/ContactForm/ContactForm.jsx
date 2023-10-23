import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlise';

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
    console.log('e.currentTarget', e.currentTarget.name.value);
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
    <form onSubmit={handleSabmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </div>

      <div>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </div>
      <button type="submit">add contacts</button>
    </form>
  );
};
