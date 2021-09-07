import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';

import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ol className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: <span className={styles.phonenumber}>{number}</span>
            <button
              type="button"
              className={styles.button}
              onClick={() => dispatch(phonebookActions.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
}