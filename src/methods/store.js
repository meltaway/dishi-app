import {createAsyncThunk} from '@reduxjs/toolkit';

/*
  Redux toolkit createAsyncThunk wrapper to handle the most common case for the async call and avoid boilerplate code
*/
const createCommonAsyncThunk = (name, request) => {
  return createAsyncThunk(name, async (body, {rejectWithValue}) => {
    const {response, error} = await request(body || null);

    if (error) {
      return rejectWithValue(error);
    }

    return response;
  });
};

/*
 CreateAsyncThunk generated actions have a format of "user/updateUserPhoto/fulfilled (rejected, pending)"

 To check if async action is success one in store we can check if action is of fulfilled type

 Useful for one-time actions happening after successfull thunk call
*/
const checkForFulfilledAction = actionName => {
  if (typeof actionName === 'string') {
    return !!actionName.includes('fulfilled');
  }
  return false;
};

/*
  Parse action payload in reducer for paginated responses

  Simplify and reuse pages checking logic
*/
const parsePaginatedResponseInFulfilledAction = (
  action,
  state,
  propertyKey,
  propertyObject = null,
) => {
  const response = action.payload.data;

  // API can return any of this
  const {cur_page, curPage} = response;

  const responsePage = cur_page || curPage;

  const propertyObjectInStore = propertyObject || state[propertyKey];

  const propertyDataArrayInStore = propertyObjectInStore
    ? propertyObjectInStore.data
    : [];

  const propertyDataArrayInResponse = response.data;

  const updatedPropertyValueInStore =
    responsePage === 1
      ? response
      : {
          ...response,
          data: propertyDataArrayInStore.concat(propertyDataArrayInResponse),
        };

  return updatedPropertyValueInStore;
};

export {
  createCommonAsyncThunk,
  checkForFulfilledAction,
  parsePaginatedResponseInFulfilledAction,
};
