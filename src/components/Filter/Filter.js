import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={e => dispatch(phonebookActions.filterContact(e.target.value))}
      />
    </label>
  );
}