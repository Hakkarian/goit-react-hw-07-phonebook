import rootReducer, { contactsApi } from './tasks/cont-slice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistedReducer from './root-reducer';

import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), contactsApi.middleware]
})

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
//       },
//     }),
// });

// export const persistor = persistStore(store)

// const createStore = (reducer, initialStore) => {
//     const startStore = reducer(initialStore);
//     return startStore;
// }
