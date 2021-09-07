import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (text, number) => {
  return {
    payload: {
      name: text,
      number,
      id: uuidv4(),
    },
  };
});

const deleteContact = createAction('contacts/delet');

const filterContact = createAction('contacts/filter');

export default {
  addContact,
  deleteContact,
  filterContact,
};