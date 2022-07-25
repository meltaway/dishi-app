import AsyncStorage from '@react-native-async-storage/async-storage';

const clearStorage = () => {
  AsyncStorage.clear();
};

const asyncStorageClient = {
  clearStorage,
};

export default asyncStorageClient;
