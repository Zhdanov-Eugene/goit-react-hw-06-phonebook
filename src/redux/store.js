import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
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
import contactsReducer from './phonebook/phonebook-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'contacts',
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persisedReduser = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persisedReduser,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };