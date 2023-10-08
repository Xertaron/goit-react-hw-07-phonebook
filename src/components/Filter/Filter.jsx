import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h5 className={styles.filterHeader}>Find contacts by name</h5>
      <input
        className={styles.filterInput}
        type="text"
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};
