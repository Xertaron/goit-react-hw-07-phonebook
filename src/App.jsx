import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors.jsx';
import { selectError } from 'redux/selectors.jsx';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import styles from './App.module.css';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <p>{error}</p>}

      {isLoading ? (
        <p>Wait a little... </p>
      ) : (
        <div
          style={{
            width: 400,
            padding: '12px 16px',
            borderRadius: 20,
            backgroundColor: '#006d00',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h1 className={styles.formHeader}>Phonebook</h1>
          <ContactForm />

          <h2 className={styles.filterHeader}>Contacts</h2>
          <Filter />

          <ContactList />
        </div>
      )}
    </>
  );
};
