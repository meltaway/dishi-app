import apiClient from '@utils/apiClient';

import {AUTH_ENDPOINTS, HTTP_METHODS} from '@constants';

const {
  LOGIN,
  REGISTER,
  LOGOUT,
  REFRESH_TOKEN,
  RESET_PASSWORD,
  OAUTH_LOGIN,
  OAUTH_REGISTER,
} = AUTH_ENDPOINTS;

const {POST} = HTTP_METHODS;

const login = (data) =>
  apiClient.unauthorizedRequest({
    method: POST,
    url: LOGIN,
    data,
  });

const register = (data) =>
  apiClient.unauthorizedRequest({
    method: POST,
    url: REGISTER,
    data,
  });

const logout = () =>
  apiClient.authorizedRequest({
    method: POST,
    url: LOGOUT,
  });

const refreshToken = () =>
  apiClient.authorizedRequest({
    method: POST,
    url: REFRESH_TOKEN,
  });

const resetPassword = (data) =>
  apiClient.unauthorizedRequest({
    method: POST,
    url: RESET_PASSWORD,
    data,
  });

const socialLogin = (data) =>
  apiClient.unauthorizedRequest({
    method: POST,
    url: OAUTH_LOGIN,
    data,
  });

const socialRegister = (data) =>
  apiClient.unauthorizedRequest({
    method: POST,
    url: OAUTH_REGISTER,
    data,
  });

const api = {
  login,
  logout,
  register,
  resetPassword,
  refreshToken,
  socialLogin,
  socialRegister,
};

export default api;
