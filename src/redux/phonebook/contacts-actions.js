// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/add', value => {
  return {
    payload: { id: shortid.generate(), ...value },
  };
});

// оставил для понимания происходящего

// const addContact = value => ({
//   type: types.add,
//   payload: { id: shortid.generate(), ...value },
// });

const deleteContact = createAction('contacts/delete');

// const deleteContact = contactId => ({
//   type: types.delete,
//   payload: contactId,
// });

const filterContact = createAction('contacts/changeFilter');

// const filterContact = value => ({
//   type: types.filter,
//   payload: value,
// });

export default { addContact, deleteContact, filterContact };

// contacts: prevState.contacts.filter(contact => contactId !== contact.id),
