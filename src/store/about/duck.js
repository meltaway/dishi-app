import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, isAnyOf} from '@reduxjs/toolkit';

import {createCommonAsyncThunk} from '@methods';

import {
  INITIAL_STATE,
  REJECTED_STATE,
  PENDING_STATE,
  FULFILLED_STATE,
  STORE_NAMES,
} from '@constants';

import api from './api';

const {ABOUT} = STORE_NAMES;

const initialState = {
  ...INITIAL_STATE,
  faq: null,
};

// Other

const getFAQThunkName = `${ABOUT}/getFAQ`;

export const getFAQ = createCommonAsyncThunk(getFAQThunkName, api.getFAQ);

/*
TODO: create common RESET_STATE_ACTION
*/
const aboutSlice = createSlice({
  name: ABOUT,
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(getFAQ.rejected), state => {
        if (state.isPending) {
          return {
            ...state,
            ...REJECTED_STATE,
          };
        }
      })
      .addMatcher(isAnyOf(getFAQ.pending), state => {
        if (state.isPending) {
          return {
            ...state,
            ...PENDING_STATE,
          };
        }
      })
      .addMatcher(isAnyOf(getFAQ.fulfilled), (state, action) => {
        return {
          ...state,
          ...FULFILLED_STATE,
          faq: action.payload.data,
        };
      });
  },
});

const aboutPersistConfig = {
  key: ABOUT,
  storage: AsyncStorage,
  whitelist: ['faq'],
};

const {actions: aboutActions, reducer: aboutReducer} = aboutSlice;

export {aboutActions, aboutReducer, aboutPersistConfig};
