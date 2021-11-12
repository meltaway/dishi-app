import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TOKEN_ASYNC_STORAGE_KEY,
  EMAIL_ASYNC_STORAGE_KEY,
  PASSWORD_ASYNC_STORAGE_KEY,
} from '@constants';

const getToken = () => AsyncStorage.getItem(TOKEN_ASYNC_STORAGE_KEY);

const setToken = token => {
  AsyncStorage.setItem(TOKEN_ASYNC_STORAGE_KEY, token);
};

const getEmail = () => AsyncStorage.getItem(EMAIL_ASYNC_STORAGE_KEY);

const setEmail = email => {
  AsyncStorage.setItem(EMAIL_ASYNC_STORAGE_KEY, email);
};

const getPassword = () => AsyncStorage.getItem(PASSWORD_ASYNC_STORAGE_KEY);

const setPassword = password => {
  AsyncStorage.setItem(PASSWORD_ASYNC_STORAGE_KEY, password);
};

const clearStorage = () => {
  AsyncStorage.clear();
};

const asyncStorageClient = {
  getToken,
  setToken,
  getEmail,
  setEmail,
  getPassword,
  setPassword,
  clearStorage,
};

export default asyncStorageClient;
