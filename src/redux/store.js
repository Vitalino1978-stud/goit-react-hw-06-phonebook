import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/contacts-reduser';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducers = combineReducers({ contacts: contactsReducer });
// const store = createStore(rootReducers, composeWithDevTools());
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const store = configureStore({
//   reducer: { contacts: contactsReducer },
//   middleware,
// });

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devtools: process.env.NODE_ENV === 'development',
});
// export default store;
const persistor = persistStore(store);

export default { store, persistor };
