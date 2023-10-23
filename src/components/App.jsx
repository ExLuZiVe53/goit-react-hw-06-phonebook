import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <div className={css.Wrapper}>
        <h1>Phonebook</h1>
        {''}
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
