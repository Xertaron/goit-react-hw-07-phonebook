import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations.jsx';
import { selectVisibleContacts } from 'redux/selectors.jsx';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            onClick={e => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
