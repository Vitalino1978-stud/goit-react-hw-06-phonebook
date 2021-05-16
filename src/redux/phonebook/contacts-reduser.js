import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-types';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.add:
//       return [...state, payload];

//     case types.delete:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

const filterContact = createReducer('', {
  [actions.filterContact]: (state, { payload }) => payload,
});

// const filterContact = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'contacts/changeFilter':
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filterContact });

// prevState => ({ contacts: [contact, ...prevState.contacts] });
