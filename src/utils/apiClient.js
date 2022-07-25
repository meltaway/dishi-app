import axios from 'axios';

import {
  API_URL,
  HTTP_STATUSES,
  HTTP_HEADERS,
  HTTP_CONTENT_TYPES,
} from './../constants';

const {ACCEPT, CONTENT_TYPE} = HTTP_HEADERS;

const {TEAPOT, REQUEST_TIMEOUT} = HTTP_STATUSES;

const {JSON} = HTTP_CONTENT_TYPES;

const defaultAxiosInstanceOptions = {
  baseURL: API_URL,
};

const defaultRequestHeaders = {
  [ACCEPT]: JSON,
  [CONTENT_TYPE]: JSON,
};

const headerInterceptor = async config => {
  const configWithDynamicHeaders = {
    ...config,
    headers: config.headers,
  };

  return configWithDynamicHeaders;
};

const resolveInterceptor = response => response;

const rejectInterceptor = error => {
  return Promise.reject(error);
};

const authorizedApiClient = axios.create(defaultAxiosInstanceOptions);

authorizedApiClient.interceptors.request.use(headerInterceptor);
authorizedApiClient.interceptors.response.use(
  resolveInterceptor,
  rejectInterceptor,
);

const wrappedAxiosRequest = async ({
  url,
  method,
  data = null,
  headers = {},
  params = {},
}) => {
  const apiClient = authorizedApiClient;

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
  request: wrappedAxiosRequest,
};

export default apiClient;
