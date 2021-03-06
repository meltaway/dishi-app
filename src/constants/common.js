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

const COUNTRY_CODES = {
  ukraine: 'UA',
  usa: 'US',
  default: 'US',
};

export {
  NOOP,
  NOTIFICATION_TIMEOUT_IN_MS_SHORT,
  NOTIFICATION_TIMEOUT_IN_MS,
  DEFAULT_USER_IMAGE_DIMENSION,
  NUMBER_OF_LINES_IN_MULTILINE_TEXT_TINY,
  NUMBER_OF_LINES_IN_MULTILINE_TEXT_SHORT,
  NUMBER_OF_LINES_IN_MULTILINE_TEXT_MEDIUM,
  NUMBER_OF_ITEMS_ON_SINGLE_PAGE,
  MAX_NUMBER_OF_ITEMS_TO_RENDER_PER_BATCH,
  NUMBER_OF_COMMENT_REPLIES_SHOWN_BY_DEFAULT,
  NUMBER_OF_COMMENT_REPLIES_ON_SINGLE_PAGE,
  UNREAD_MESSAGES_CHECK_INTERVAL_IN_MS,
  COUNTRY_CODES,
};
