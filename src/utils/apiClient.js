import axios from 'axios';

import {refreshToken, userActions} from '@store';
import {store} from '@store/config';

import {
  DEV_API_URL,
  HTTP_STATUSES,
  HTTP_HEADERS,
  HTTP_CONTENT_TYPES,
  USER_PRIVATE_ENDPOINTS,
  STORE_NAMES,
} from '@constants';

const {ACCEPT, CONTENT_TYPE, AUTHORIZATION, USER_LOCATION} = HTTP_HEADERS;

const {UNAUTHORIZED, TEAPOT, REQUEST_TIMEOUT} = HTTP_STATUSES;

const {JSON} = HTTP_CONTENT_TYPES;

const defaultAxiosInstanceOptions = {
  baseURL: DEV_API_URL,
};

const defaultRequestHeaders = {
  [ACCEPT]: JSON,
  [CONTENT_TYPE]: JSON,
};

const headerInterceptor = async config => {
  const currentStoreState = await store.getState();

  const {token} = currentStoreState[STORE_NAMES.USER];
  const {userLocation} = currentStoreState[STORE_NAMES.USER];

  const configWithDynamicHeaders = {
    ...config,
    headers: {
      ...config.headers,
      [AUTHORIZATION]: token ? `Bearer ${token}` : '',
      [USER_LOCATION]: userLocation || 'CH',
    },
  };

  return configWithDynamicHeaders;
};

const resolveInterceptor = response => response;

/*
TODO: add bugsnag error handling for every API call rejection
*/

const {UPDATE_PASSWORD} = USER_PRIVATE_ENDPOINTS;

const rejectInterceptor = error => {
  if (!error.response) {
    store.dispatch(userActions.setConnectionError({isError: true}));
  }

  /*
    In general case of 401 Unauthorized error is returned user should be reset and token should be deleted
    But in case of authorized updatePassword endpoint 401 is also returned for wrong credentials, so user should not be reset in that situation
  */
  if (
    error.response?.status === UNAUTHORIZED &&
    error.response?.config?.url !== UPDATE_PASSWORD
  ) {
    store.dispatch(refreshToken());
  }

  return Promise.reject(error);
};

const unauthorizedApiClient = axios.create(defaultAxiosInstanceOptions);

const authorizedApiClient = axios.create(defaultAxiosInstanceOptions);

unauthorizedApiClient.interceptors.request.use(headerInterceptor);
authorizedApiClient.interceptors.request.use(headerInterceptor);
authorizedApiClient.interceptors.response.use(
  resolveInterceptor,
  rejectInterceptor,
);

const wrappedAxiosRequest = isAuthorized => async ({
  url,
  method,
  data = null,
  headers = {},
  params = {},
}) => {
  const apiClient = isAuthorized ? authorizedApiClient : unauthorizedApiClient;

  const config = {
    url,
    method,
    params,
    headers: {
      ...defaultRequestHeaders,
      ...headers,
    },
  };

  if (data) {
    config.data = data;
  }

  try {
    const response = await apiClient.request(config);

    return response?.data
      ? {response: response.data, error: null}
      : {response: null, error: null};
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        response: null,
        error: {
          data: error.response.data,
          status: error.response.status,
        },
      };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return {
        response: null,
        error: {
          data: error.request,
          status: REQUEST_TIMEOUT,
        },
      };
    }
    return {
      response: null,
      error: {
        data: error,
        status: TEAPOT,
      },
    };
  }
};

const apiClient = {
  authorizedRequest: wrappedAxiosRequest(true),
  unauthorizedRequest: wrappedAxiosRequest(false),
};

export default apiClient;
