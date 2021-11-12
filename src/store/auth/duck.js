import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk, isAnyOf} from '@reduxjs/toolkit';

import {
  INITIAL_STATE,
  PENDING_STATE,
  REJECTED_STATE,
  FULFILLED_STATE,
  STORE_NAMES,
} from '@constants';

import {
  userActions,
  authorActions,
  feedActions,
  journalActions,
  searchingActions,
  hubsActions,
  fundingsActions,
  articlesActions,
} from '@store';

import api from './api';

const {AUTH} = STORE_NAMES;

const initialState = {
  ...INITIAL_STATE,
  firstName: null,
  lastName: null,
  email: null,
  // https://apidocs.peeref.com/docs/app-api/Auth/oauth-login.html
  platform: null,
  platform_id: null,
  platform_state: null,
};

const socialLoginThunkName = `${AUTH}/login/social`;
const socialRegisterThunkName = `${AUTH}/register/social`;

const loginThunkName = `${AUTH}/login`;
const logoutThunkName = `${AUTH}/logout`;
const registerThunkName = `${AUTH}/register`;
const resetPasswordThunkName = `${AUTH}/resetPassword`;
const refreshTokenThunkName = `${AUTH}/refreshToken`;

export const login = createAsyncThunk(loginThunkName, async (body, {dispatch, rejectWithValue}) => {
  const {response, error} = await api.login(body);

  if (error) {
    return rejectWithValue(error);
  }

  const {
    data: {access_token, user_info},
  } = response;

  // dispatch an action to user store to init user with data returned on login
  dispatch(userActions.setUser({user_info, token: access_token}));

  return response;
});

export const logout = createAsyncThunk(logoutThunkName, async (_, {dispatch, rejectWithValue}) => {
  const {response, error} = await api.logout();

  if (error) {
    return rejectWithValue(error);
  }

  await dispatch(userActions.resetState());
  await dispatch(authorActions.resetState());
  await dispatch(feedActions.resetState());
  await dispatch(journalActions.resetState());
  await dispatch(searchingActions.resetState());
  await dispatch(hubsActions.resetState());
  await dispatch(fundingsActions.resetState());
  await dispatch(articlesActions.resetState());

  return response;
});

export const register = createAsyncThunk(
  registerThunkName,
  async (body, {dispatch, getState, rejectWithValue}) => {
    const {firstName, lastName, email} = getState()[AUTH];

    const finalData = {
      ...body,
      firstName,
      lastName,
      email,
    };

    const {response, error} = await api.register(finalData);

    if (error) {
      return rejectWithValue(error);
    }

    const {
      data: {access_token, user_info},
    } = response;

    // dispatch an action to user store to init user with data returned on login
    dispatch(userActions.setUser({user_info, token: access_token}));

    return response;
  },
);

export const resetPassword = createAsyncThunk(
  resetPasswordThunkName,
  async (body, {dispatch, rejectWithValue}) => {
    const {response, error} = await api.resetPassword(body);

    if (error) {
      return rejectWithValue(error);
    }

    return response;
  },
);

export const refreshToken = createAsyncThunk(
  refreshTokenThunkName,
  async (_, {dispatch, rejectWithValue}) => {
    const {response, error} = await api.refreshToken();

    if (error) {
      return rejectWithValue(error);
    }

    const {errno, data} = response;

    // refresh token expired, dispatch an action to user store to reset the user and log in again
    if (errno === -1) {
      dispatch(userActions.resetState());
    } else {
      // dispatch an action to user store to init user with data returned on login
      dispatch(userActions.setUser({token: data.access_token}));
    }

    return response;
  },
);

/*
  Body:
  platform	enum	Yes	[google,facebook,orcid,apple]	Social platform
  access_token	string	Yes	-	Token from auth server
*/
export const socialLogin = createAsyncThunk(
  socialLoginThunkName,
  async (body, {dispatch, rejectWithValue}) => {
    const {response, error} = await api.socialLogin(body);

    if (error) {
      return rejectWithValue(error);
    }

    const {
      data: {user_info, access_token},
    } = response;

    /*
      If user info is provided in response, it means user is already registered with such social login method, so force him to login
    */
    if (user_info) {
      // dispatch an action to user store to init user with data returned on login
      dispatch(userActions.setUser({user_info, token: access_token}));
    }

    return response;
  },
);

export const socialRegister = createAsyncThunk(
  socialRegisterThunkName,
  async (body, {dispatch, rejectWithValue, getState}) => {
    const {platform, platform_id, platform_state} = getState()[AUTH];

    const finalData = {
      ...body,
      platform,
      platform_id,
      platform_state,
    };

    const {response, error} = await api.socialRegister(finalData);

    if (error) {
      return rejectWithValue(error);
    }

    const {
      data: {access_token, user_info},
    } = response;

    // dispatch an action to user store to init user with data returned on login
    dispatch(userActions.setUser({user_info, token: access_token}));

    return response;
  },
);

/*
TODO: create common RESET_STATE_ACTION
*/
const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    setUserField: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetState: () => {
      return initialState;
    },
    resetError: (state) => {
      return {
        ...state,
        error: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          login.pending,
          logout.pending,
          register.pending,
          resetPassword.pending,
          refreshToken.pending,
          socialLogin.pending,
          socialRegister.pending,
        ),
        (state) => {
          if (!state.isPending) {
            return {
              ...state,
              ...PENDING_STATE,
            };
          }
        },
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          logout.rejected,
          register.rejected,
          resetPassword.rejected,
          refreshToken.rejected,
          socialLogin.rejected,
          socialRegister.rejected,
        ),
        (state, action) => {
          const {
            data: {message, errors},
            status,
          } = action.payload;

          if (state.isPending) {
            const newState = {
              ...state,
              ...REJECTED_STATE,
              error: {message, status, errors},
            };

            return newState;
          }
        },
      )

      .addMatcher(
        isAnyOf(
          login.fulfilled,
          register.fulfilled,
          socialRegister.fulfilled,
          resetPassword.fulfilled,
        ),
        (state) => {
          return {
            ...state,
            ...FULFILLED_STATE,
          };
        },
      )
      .addMatcher(isAnyOf(socialLogin.fulfilled), (state, action) => {
        const {platform, platform_id, platform_state} = action.payload?.data;

        const updatedStateFields =
          platform && platform_id ? {platform, platform_id, platform_state} : {};

        return {
          ...state,
          ...FULFILLED_STATE,
          ...updatedStateFields,
        };
      })
      .addMatcher(isAnyOf(refreshToken.fulfilled), (state, action) => {
        const {errno} = action.payload;

        const newState =
          errno && errno === -1
            ? {
                ...initialState,
              }
            : {
                ...state,
                ...FULFILLED_STATE,
              };

        return newState;
      })
      .addMatcher(isAnyOf(logout.fulfilled), () => {
        return initialState;
      });
  },
});

const authPersistConfig = {
  key: AUTH,
  storage: AsyncStorage,
  blacklist: Object.keys(initialState),
};

const {actions: authActions, reducer: authReducer} = authSlice;

export {authActions, authReducer, authPersistConfig};
