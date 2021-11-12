/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, isAnyOf, current} from '@reduxjs/toolkit';

import {createCommonAsyncThunk} from '@methods';

import {
  INITIAL_STATE,
  PENDING_STATE,
  REJECTED_STATE,
  FULFILLED_STATE,
  STORE_NAMES,
  COUNTRY_CODES,
} from '@constants';

import api from './api';

const {USER} = STORE_NAMES;

const initialState = {
  ...INITIAL_STATE,
  token: null,
  user_info: {
    id: '',
    first_name: '',
    last_name: '',
    avatar: '',
    email: '',
    country: '',
    oauth_platform: '',
    oauth_platform_id: '',
  },
  userLocation: COUNTRY_CODES.default,
  onboarding_complete: false,
  // default registration state
  socialPlatformForRegistration: null,
  isRegisteredWithPassword: null,
  connectionError: false,
};

// Profile
const getProfileThunkName = `${USER}/getProfile`;
const updateUserProfileThunkName = `${USER}/updateProfile`;
// Update
const updateUserPhotoThunkName = `${USER}/updatePhoto`;
const updateUserPasswordThunkName = `${USER}/updatePassword`;
// Registration info
const checkRegistrationTypeThunkName = `${USER}/checkRegistrationType`;

// Profile
export const getUserProfile = createCommonAsyncThunk(
  getProfileThunkName,
  api.getUserProfile,
);

export const updateUserProfile = createCommonAsyncThunk(
  updateUserProfileThunkName,
  api.updateUserProfile,
);

// Update
export const updateUserPhoto = createCommonAsyncThunk(
  updateUserPhotoThunkName,
  api.updateUserPhoto,
);

export const updateUserPassword = createCommonAsyncThunk(
  updateUserPasswordThunkName,
  api.updateUserPassword,
);

// Registration info
export const checkRegistrationType = createCommonAsyncThunk(
  checkRegistrationTypeThunkName,
  api.checkUserRegistrationType,
);

/*
TODO: create common RESET_STATE_ACTION
*/
const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {token, user_info} = action.payload;

      return {
        ...state,
        user_info: user_info || state.user_info,
        token,
      };
    },
    resetState: () => {
      return {
        ...initialState,
      };
    },
    resetStateWithoutLogout: state => {
      return {
        ...initialState,
        token: state.token,
        user_info: {
          ...state.user_info,
        },
      };
    },
    resetError: state => {
      return {
        ...state,
        error: false,
      };
    },
    tutorialDone: (state, action) => {
      const {userId, tutorialName} = action.payload;

      return {
        ...state,
        tutorials_completed: {
          ...state.tutorials_completed,
          [userId]: {
            ...state.tutorials_completed[userId],
            [tutorialName]: true,
          },
        },
      };
    },
    onboardingDone: state => {
      return {
        ...state,
        onboarding_complete: true,
      };
    },
    setPushNotificationService: (state, {payload}) => {
      const {service} = payload;
      return {
        ...state,
        pushNotificationsService: service,
      };
    },
    setUserLocation: (state, {payload}) => {
      const {userLocation} = payload;
      return {
        ...state,
        userLocation,
      };
    },
    setConnectionError: (state, {payload}) => {
      const {isError} = payload;

      return {
        ...state,
        connectionError: isError,
      };
    },
    toggleSuggestedHubJoinedStatus: (state, {payload}) => {
      const currentState = current(state);

      const {id: updatedHubId, joined: newJoinedStatus} = payload;

      const feedSuggestionsDeepCopy = JSON.parse(
        JSON.stringify(currentState.feed_suggestions),
      );

      // in case there is no hub it means the request is fired from single hub screen
      const hubIndexInStore = feedSuggestionsDeepCopy?.hubs
        ? feedSuggestionsDeepCopy.hubs.findIndex(item => {
            return item.id === updatedHubId;
          })
        : -1;

      if (hubIndexInStore > -1) {
        const hubInStore = feedSuggestionsDeepCopy.hubs[hubIndexInStore];

        const oldMembersCount = Number(hubInStore.members_count);

        hubInStore.members_count = newJoinedStatus
          ? oldMembersCount + 1
          : oldMembersCount - 1;

        hubInStore.has_joined = newJoinedStatus;
      }
      return {
        ...state,
        ...FULFILLED_STATE,
        feed_suggestions: feedSuggestionsDeepCopy,
      };
    },
    followSuggestedAuthor: (state, {payload}) => {
      const currentState = current(state);

      const {id: updatedAuthorId} = payload;

      const feedSuggestionsDeepCopy = JSON.parse(
        JSON.stringify(currentState.feed_suggestions),
      );

      // in case there is no author it means the request is fired from single author screen
      const authorIndexInStore = feedSuggestionsDeepCopy?.authors
        ? feedSuggestionsDeepCopy.authors.findIndex(item => {
            return item.id === updatedAuthorId;
          })
        : -1;

      if (authorIndexInStore > -1) {
        const authorInStore =
          feedSuggestionsDeepCopy.authors[authorIndexInStore];

        authorInStore.has_followed = !authorInStore.has_followed;
      }
      return {
        ...state,
        ...FULFILLED_STATE,
        feed_suggestions: feedSuggestionsDeepCopy,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        isAnyOf(
          checkRegistrationType.pending,
          // profile
          getUserProfile.pending,
          updateUserProfile.pending,
          // update
          updateUserPhoto.pending,
          updateUserPassword.pending,
        ),
        state => {
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
          checkRegistrationType.rejected,
          // profile
          getUserProfile.rejected,
          updateUserProfile.rejected,
          // update
          updateUserPhoto.rejected,
          updateUserPassword.rejected,
        ),
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
      .addMatcher(isAnyOf(updateUserPassword.fulfilled), state => {
        if (state.isPending) {
          return {
            ...state,
            ...FULFILLED_STATE,
          };
        }
      })
      .addMatcher(
        isAnyOf(getUserProfile.fulfilled, updateUserProfile.fulfilled),
        (state, action) => {
          if (state.isPending) {
            return {
              ...state,
              ...FULFILLED_STATE,
              user_info: action.payload.data,
            };
          }
        },
      )
      .addMatcher(isAnyOf(updateUserPhoto.fulfilled), (state, action) => {
        if (state.isPending) {
          return {
            ...state,
            ...FULFILLED_STATE,
            user_info: {
              ...state.user_info,
              avatar: action.payload.data,
            },
          };
        }
      })
      .addMatcher(isAnyOf(checkRegistrationType.fulfilled), (state, action) => {
        const {password, oauth_platform} = action.payload.data;

        return {
          ...state,
          ...FULFILLED_STATE,
          isRegisteredWithPassword: password || state.password,
          socialPlatformForRegistration: oauth_platform || state.oauth_platform,
        };
      });
  },
});

const userPersistConfig = {
  key: USER,
  storage: AsyncStorage,
  whitelist: ['token'],
};

const {actions: userActions, reducer: userReducer} = userSlice;

export {userActions, userReducer, userPersistConfig};
