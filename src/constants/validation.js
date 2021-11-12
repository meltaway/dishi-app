const ANY_FIELD = 'any';

const EMAIL_FIELD = 'email';
const PASSWORD_FIELD = 'password';
const PHONE_NUMBER_FIELD = 'phoneNumber';
const NUMBER_FIELD = 'number';
const DOI_FIELD = 'doi';

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

const URL_FIELD = 'url';
const ORCID_FIELD = 'orcid';

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
  'email',
  'phoneNumber',
  'password',
  'url',
  'doi',
];

const GET_REGEXP_BY_FIELD_TYPE = (type, isRequired) => {
  switch (type) {
    case ANY_FIELD:
      return isRequired ? /^(?!\s*$).+/ : null;
    case EMAIL_FIELD:
      return isRequired
        ? /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        : /^$|\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    case PASSWORD_FIELD:
      return /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

    case DOI_FIELD:
      return /^10\.\d+\/.+$/;
    // validation suggested in Api

    case URL_FIELD:
      return isRequired
        ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&=]*)/
        : /^$|https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&=]*)/;
    //
    // case DOI_FIELD:
    //   return /^10\.\d{4,9}\/[-.;()/:\w]+$/;

    case ORCID_FIELD:
      return /(\d{4}-\d{4}-\d{4}-\d{3}(?:\d|X))$/;

    case TEXT_FIELD_SHORT:
    case TEXT_FIELD_MEDIUM:
    case TEXT_FIELD_NORMAL:
    case TEXT_FIELD_LONG:
    case TEXT_FIELD_MAX_LONG:
      return isRequired ? /^[a-z ,.'-]+$/i : /^$|[a-z ,.'-]+$/i;

    case PHONE_NUMBER_FIELD:
      return isRequired
        ? /^(?=.*[0-9])[- +()0-9]+$/
        : /^$|(?=.*[0-9])[- +()0-9]+$/;
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
    case PASSWORD_FIELD:
    case TEXT_FIELD_SHORT:
      return 20;
    case TEXT_FIELD_MEDIUM:
      return 50;
    case TEXT_FIELD_NORMAL:
      return 100;
    case TEXT_FIELD_LONG:
      return 200;
    // email, password, phone number
    case EMAIL_FIELD:
      return 64;
    case PHONE_NUMBER_FIELD:
      return 50;
    case DOI_FIELD:
      return 150;
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
    case EMAIL_FIELD:
      return 'email-address';
    case PHONE_NUMBER_FIELD:
      return 'phone-pad';
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
  EMAIL_FIELD,
  PASSWORD_FIELD,
  PHONE_NUMBER_FIELD,
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
  URL_FIELD,
  ORCID_FIELD,
  DOI_FIELD,
  INPUT_TYPES,
};
