const AUTH_ENDPOINTS = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  REFRESH_TOKEN: 'auth/refresh',
  LOGOUT: 'auth/logout',
  RESET_PASSWORD: 'auth/password/reset',
  CHECK_REGISTRATION: 'auth/registrant',
  OAUTH_LOGIN: 'oauth/login',
  OAUTH_REGISTER: 'oauth/register',
};

const ABOUT_ENDPOINTS = {
  GET_FAQ: 'about/faq',
};

const UTILS_ENDPOINTS = {
  UPLOAD_IMAGE: 'util/upload-image',
  DELETE_IMAGE: 'util/delete-image',
};

export {AUTH_ENDPOINTS, ABOUT_ENDPOINTS, UTILS_ENDPOINTS};
