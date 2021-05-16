// import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/contacts-reduser';
import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducers = combineReducers({ contacts: contactsReducer });
// const store = createStore(rootReducers, composeWithDevTools());
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware,
});
export default store;
