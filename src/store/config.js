import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

import {STORE_NAMES} from '@constants';

import {authReducer, authPersistConfig} from './auth/duck';
import {userReducer, userPersistConfig} from './user/duck';
import {aboutReducer, aboutPersistConfig} from './about/duck';

const persistedReducersObject = {
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  about: persistReducer(aboutPersistConfig, aboutReducer),
};

const rootReducer = combineReducers(persistedReducersObject);

const rootPersistConfig = {
  key: STORE_NAMES.ROOT,
  storage: AsyncStorage,
  /*
    Put all substores to blacklist, so their local persist config won't conflict with the global one
    and the local persist configs would be the only source of truth for every duck
  */
  blacklist: Object.keys(persistedReducersObject),
};

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

// TODO: disable devTools in production mode
const store = configureStore({
  reducer: persistedRootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
