import apiClient from '@utils/apiClient';

import {ABOUT_ENDPOINTS, HTTP_METHODS} from '@constants';

const {GET_FAQ} = ABOUT_ENDPOINTS;

const {GET} = HTTP_METHODS;

const getFAQ = () =>
  apiClient.authorizedRequest({
    method: GET,
    url: GET_FAQ,
  });

const api = {
  getFAQ,
};

export default api;
