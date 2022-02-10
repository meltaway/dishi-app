const ANY_FIELD = 'any';

const NUMBER_FIELD = 'number';

const TEXT_FIELD_SHORT = 'textShort';
const TEXT_FIELD_MEDIUM = 'textMedium';
const TEXT_FIELD_NORMAL = 'textNormal';
const TEXT_FIELD_LONG = 'textLong';
const TEXT_FIELD_MAX_LONG = 'textMaxLong';

const TEXT_WITH_NUMBERS_FIELD_SHORT = 'textWithNumbersShort';
const TEXT_WITH_NUMBERS_FIELD_MEDIUM = 'textWithNumbersMedium';
const TEXT_WITH_NUMBERS_FIELD_LONG = 'textWithNumbersLong';
const TEXT_WITH_NUMBERS_FIELD_NORMAL = 'textWithNumbersNormal';
const TEXT_WITH_NUMBERS_FIELD_MEDIUM_LONG = 'textWithNumbersMediumLong';
const TEXT_WITH_NUMBERS_FIELD_MAX_LONG = 'textWithNumbersMaxLong';

const INPUT_TYPES = [
  'text',
  'textShort',
  'textMedium',
  'textNormal',
  'textLong',
  'textMaxLong',
  'textWithNumbersShort',
  'textWithNumbersMedium',
  'textWithNumbersLong',
  'textWithNumbersMaxLong',
  'number',
];

const GET_REGEXP_BY_FIELD_TYPE = (type, isRequired) => {
  switch (type) {
    case ANY_FIELD:
      return isRequired ? /^(?!\s*$).+/ : null;
    case TEXT_FIELD_SHORT:
    case TEXT_FIELD_MEDIUM:
    case TEXT_FIELD_NORMAL:
    case TEXT_FIELD_LONG:
    case TEXT_FIELD_MAX_LONG:
      return isRequired ? /^[a-z ,.'-]+$/i : /^$|[a-z ,.'-]+$/i;
    case TEXT_WITH_NUMBERS_FIELD_SHORT:
    case TEXT_WITH_NUMBERS_FIELD_MEDIUM:
    case TEXT_WITH_NUMBERS_FIELD_LONG:
    case TEXT_WITH_NUMBERS_FIELD_MAX_LONG:
      return null;
    default:
      return null;
  }
};

const GET_MAX_LENGTH_BY_FIELD_TYPE = type => {
  switch (type) {
    // text fields
    case TEXT_FIELD_SHORT:
      return 20;
    case TEXT_FIELD_MEDIUM:
      return 50;
    case TEXT_FIELD_NORMAL:
      return 100;
    case TEXT_FIELD_LONG:
      return 200;
    // text + numbers fields
    case TEXT_WITH_NUMBERS_FIELD_SHORT:
      return 50;
    case TEXT_WITH_NUMBERS_FIELD_MEDIUM:
      return 200;
    case TEXT_WITH_NUMBERS_FIELD_NORMAL:
      return 1000;
    case TEXT_WITH_NUMBERS_FIELD_LONG:
      return 2000;
    case TEXT_FIELD_MAX_LONG:
      return 5000;
    case TEXT_WITH_NUMBERS_FIELD_MEDIUM_LONG:
      return 30000;
    case TEXT_WITH_NUMBERS_FIELD_MAX_LONG:
      return 50000;
    default:
      return 2000;
  }
};

// React Native TextInput props
const GET_KEYBOARD_TYPE_BY_FIELD_TYPE = type => {
  switch (type) {
    case NUMBER_FIELD:
      return 'numeric';
    default:
      return 'default';
  }
};

export {
  GET_KEYBOARD_TYPE_BY_FIELD_TYPE,
  GET_REGEXP_BY_FIELD_TYPE,
  GET_MAX_LENGTH_BY_FIELD_TYPE,
  ANY_FIELD,
  NUMBER_FIELD,
  TEXT_FIELD_SHORT,
  TEXT_FIELD_MEDIUM,
  TEXT_FIELD_NORMAL,
  TEXT_FIELD_LONG,
  TEXT_FIELD_MAX_LONG,
  TEXT_WITH_NUMBERS_FIELD_SHORT,
  TEXT_WITH_NUMBERS_FIELD_MEDIUM,
  TEXT_WITH_NUMBERS_FIELD_LONG,
  TEXT_WITH_NUMBERS_FIELD_MEDIUM_LONG,
  TEXT_WITH_NUMBERS_FIELD_NORMAL,
  TEXT_WITH_NUMBERS_FIELD_MAX_LONG,
  INPUT_TYPES,
};
