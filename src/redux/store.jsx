import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice.jsx';
import { contactsReducer } from './contactSlice.jsx';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
