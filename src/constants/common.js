const NOOP = () => {};

const NOTIFICATION_TIMEOUT_IN_MS_SHORT = 1000;

const NOTIFICATION_TIMEOUT_IN_MS = 2000;

const DEFAULT_USER_IMAGE_DIMENSION = 150;

const NUMBER_OF_ITEMS_ON_SINGLE_PAGE = 15;

const MAX_NUMBER_OF_ITEMS_TO_RENDER_PER_BATCH = 30;

const NUMBER_OF_LINES_IN_MULTILINE_TEXT_TINY = 2;

const NUMBER_OF_LINES_IN_MULTILINE_TEXT_SHORT = 3;

const NUMBER_OF_LINES_IN_MULTILINE_TEXT_MEDIUM = 5;

const NUMBER_OF_COMMENT_REPLIES_SHOWN_BY_DEFAULT = 5;

const NUMBER_OF_COMMENT_REPLIES_ON_SINGLE_PAGE = 10;

// 1 minute
const UNREAD_MESSAGES_CHECK_INTERVAL_IN_MS = 60000;

const AUTH_TYPES = {
  android: ['google', 'facebook'],
  ios: ['google', 'facebook', 'apple'],
};

const COUNTRY_CODES = {
  ukraine: 'UA',
  usa: 'US',
  default: 'US',
};

const MIN_COMMENTS_NUMBER_TO_COLLAPSE_ABOUT_SECTION = 15;

const GEODECODER_API_URL = (longitude, latitude) =>
  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

const GOOGLE_ROOT_URL = 'https://www.google.com';

const AVATAR_PICKER_OPTIONS = {
  width: DEFAULT_USER_IMAGE_DIMENSION,
  height: DEFAULT_USER_IMAGE_DIMENSION,
  compressImageMaxWidth: DEFAULT_USER_IMAGE_DIMENSION,
  compressImageMaxHeight: DEFAULT_USER_IMAGE_DIMENSION,
  mediaType: 'photo',
  cropperCircleOverlay: true,
  cropping: true,
  includeBase64: true,
  forceJpg: true,
};

const IMAGES_PICKER_OPTIONS = {
  width: 3000,
  height: 850,
  compressImageMaxWidth: 3000,
  compressImageMaxHeight: 850,
  mediaType: 'photo',
  includeBase64: true,
  forceJpg: true,
  multiple: true,
};

const NOTIFICATION_TYPES = {
  IMAGE_ERROR: 'imageError',
  PROFILE_UPDATE_SUCCESS: 'updateSuccess',
  PROFILE_UPDATE_ERROR: 'updateError',
};

export {
  AVATAR_PICKER_OPTIONS,
  IMAGES_PICKER_OPTIONS,
  AUTH_TYPES,
  NOOP,
  NOTIFICATION_TIMEOUT_IN_MS_SHORT,
  NOTIFICATION_TIMEOUT_IN_MS,
  DEFAULT_USER_IMAGE_DIMENSION,
  NOTIFICATION_TYPES,
  NUMBER_OF_LINES_IN_MULTILINE_TEXT_TINY,
  NUMBER_OF_LINES_IN_MULTILINE_TEXT_SHORT,
  NUMBER_OF_LINES_IN_MULTILINE_TEXT_MEDIUM,
  NUMBER_OF_ITEMS_ON_SINGLE_PAGE,
  MAX_NUMBER_OF_ITEMS_TO_RENDER_PER_BATCH,
  NUMBER_OF_COMMENT_REPLIES_SHOWN_BY_DEFAULT,
  NUMBER_OF_COMMENT_REPLIES_ON_SINGLE_PAGE,
  MIN_COMMENTS_NUMBER_TO_COLLAPSE_ABOUT_SECTION,
  GEODECODER_API_URL,
  UNREAD_MESSAGES_CHECK_INTERVAL_IN_MS,
  GOOGLE_ROOT_URL,
  COUNTRY_CODES,
};
