import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, isAnyOf, createAsyncThunk} from '@reduxjs/toolkit';

import {
  INITIAL_STATE,
  PENDING_STATE,
  REJECTED_STATE,
  FULFILLED_STATE,
  STORE_NAMES,
} from './../../constants';
import {createCommonAsyncThunk} from './../../methods';

import api from './api';

const {RECIPES} = STORE_NAMES;

const initialState = {
  ...INITIAL_STATE,
  recipes: null,
  recipesById: {},
};

const getRecipesListThunkName = `${RECIPES}/getRecipesList`;
const getRecipeThunkName = `${RECIPES}/getRecipe`;

export const getRecipesList = createAsyncThunk(
  getRecipesListThunkName,
  async (body, {rejectWithValue}) => {
    const {response, error} = await api.getRecipeList(body || null);

    if (error) {
      return rejectWithValue(error);
    }

    return response;
  },
);

export const getRecipe = createAsyncThunk(
  getRecipeThunkName,
  async (body, {rejectWithValue}) => {
    const {response, error} = await api.getRecipe(body || null);

    if (error) {
      return rejectWithValue(error);
    }

    return response;
  },
);

const recipesSlice = createSlice({
  name: RECIPES,
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
    resetError: state => {
      return {
        ...state,
        error: false,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(getRecipesList.pending, getRecipe.pending), state => {
        return {
          ...state,
          ...PENDING_STATE,
        };
      })
      .addMatcher(
        isAnyOf(getRecipesList.rejected, getRecipe.rejected),
        (state, action) => {
          const {
            data: {message, errors},
            status,
          } = action.payload;

          if (state.isPending) {
            return {
              ...state,
              ...REJECTED_STATE,
              error: {message, status, errors},
            };
          }
        },
      )
      .addMatcher(isAnyOf(getRecipe.fulfilled), (state, action) => {
        const recipeId = action.meta.arg.id[0];
        return {
          ...state,
          ...FULFILLED_STATE,
          recipesById: {
            ...state.recipesById,
            [recipeId]: action.payload,
          },
        };
      })
      .addMatcher(isAnyOf(getRecipesList.fulfilled), (state, action) => {
        return {
          ...state,
          ...FULFILLED_STATE,
          recipes: action.payload,
        };
      });
  },
});

const recipesPersistConfig = {
  key: RECIPES,
  storage: AsyncStorage,
  blacklist: Object.keys(initialState),
};

const {actions: recipesActions, reducer: recipesReducer} = recipesSlice;

export {recipesActions, recipesReducer, recipesPersistConfig};
