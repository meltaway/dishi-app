import apiClient from '@utils/apiClient';

import {
  USER_PRIVATE_ENDPOINTS,
  HTTP_HEADERS,
  HTTP_CONTENT_TYPES,
  HTTP_METHODS,
} from '@constants';

const {
  // password or social
  CHECK_REGISTRATION_TYPE,
  // profile actions
  UPDATE_PROFILE,
  UPDATE_PHOTO,
  UPDATE_PASSWORD,
} = USER_PRIVATE_ENDPOINTS;

const {CONTENT_TYPE} = HTTP_HEADERS;

const {FORM_DATA} = HTTP_CONTENT_TYPES;

const {GET, POST, PUT, PATCH} = HTTP_METHODS;

const checkUserRegistrationType = () =>
  apiClient.authorizedRequest({
    method: GET,
    url: CHECK_REGISTRATION_TYPE,
  });

const getUserProfile = () =>
  apiClient.authorizedRequest({
    method: GET,
    url: UPDATE_PROFILE,
  });

const updateUserProfile = data =>
  apiClient.authorizedRequest({
    method: PATCH,
    url: UPDATE_PROFILE,
    data,
  });

const updateUserPhoto = data =>
  apiClient.authorizedRequest({
    method: POST,
    url: UPDATE_PHOTO,
    data,
    headers: {
      [CONTENT_TYPE]: [FORM_DATA],
    },
  });

const updateUserPassword = data =>
  apiClient.authorizedRequest({
    method: PUT,
    url: UPDATE_PASSWORD,
    data,
  });

const api = {
  checkUserRegistrationType,
  getUserProfile,
  // update
  updateUserPassword,
  updateUserPhoto,
  updateUserProfile,
};

export default api;
