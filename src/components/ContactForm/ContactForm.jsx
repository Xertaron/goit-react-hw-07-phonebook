import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/operations.jsx';
import { selectContacts } from '../../redux/selectors.jsx';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        console.log('er');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isContactRepeat = contacts.find(el => el.name === name);

    if (isContactRepeat) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const action = addContact(contact);
    dispatch(action);

    event.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.labelName}>Name</h3>
      <input
        className={styles.label}
        type="text"
        name="name"
        onChange={inputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <h3 className={styles.labelNumber}>Number</h3>
      <input
        className={styles.label}
        type="tel"
        name="number"
        onChange={inputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.buttonEditor} type="submit">
        {' '}
        Add contact{' '}
      </button>
    </form>
  );
};
