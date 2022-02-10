/*
  The folder will contain reusable business logic shared with multiple components
  Separate file/folder for each entity would be created: methods/journals.js, methods/webinars.js, etc

  Commonly same stuff in React apps is placed under utils/methods or utils/helpers
*/

export {
  concatErrorMessagesFromServer,
  findConstantItemIdByName,
  findConstantPropertyById,
  areArraysEqual,
  filterEmptyObjectValues,
  convertPascalCaseToSnakeCase,
  convertObjectToRequestQuery,
  getTagsArray,
  removeProtocolFromUrlString,
} from './common';

export {
  formatSelectedDeadline,
  formatDeadline,
  formatTimestampToDateString,
  formatTimestampToDateName,
  formatZoneDateToDateName,
  getYearsArray,
  isTimestampFromToday,
  getTime,
  getDateTimeWithTimezone,
} from './datetime';

export {
  createCommonAsyncThunk,
  checkForFulfilledAction,
  parsePaginatedResponseInFulfilledAction,
} from './store';
