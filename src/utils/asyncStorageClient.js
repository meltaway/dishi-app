import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_ASYNC_STORAGE_KEY} from '@constants';

const getToken = () => AsyncStorage.getItem(TOKEN_ASYNC_STORAGE_KEY);

const setToken = token => {
  AsyncStorage.setItem(TOKEN_ASYNC_STORAGE_KEY, token);
};

const clearStorage = () => {
  AsyncStorage.clear();
};

const asyncStorageClient = {
  getToken,
  setToken,
  clearStorage,
};

export default asyncStorageClient;
