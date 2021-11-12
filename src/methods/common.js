import {RESEARCH_FIELDS} from '@constants';

const findConstantItemIdByName = (searchedItemProperty, entityName) => {
  let arrayToSearch;
  let propertyNameToSearch;

  switch (entityName) {
    case 'category':
      arrayToSearch = RESEARCH_FIELDS;
      propertyNameToSearch = 'en';
      break;
    default:
      arrayToSearch = [];
      propertyNameToSearch = '';
      break;
  }

  const foundItem = arrayToSearch.find(currentItem => {
    return currentItem[propertyNameToSearch] === searchedItemProperty;
  });

  return foundItem ? foundItem.id : null;
};

const findConstantPropertyById = (searchedId, entityName) => {
  let arrayToSearch;
  let propertyNameToSearch;

  switch (entityName) {
    default:
      arrayToSearch = [];
      propertyNameToSearch = '';
      break;
  }

  const foundItem = arrayToSearch.find(currentItem => {
    return currentItem.id === searchedId;
  });

  return foundItem ? foundItem[propertyNameToSearch] : null;
};

/*
Example of the error structure
  message: "The given data was invalid."
  status: 422
   errors: {
    email: ["The e-mail has already been taken."]
  }
*/
const concatErrorMessagesFromServer = errorObject => {
  if (errorObject.errors && Object.keys(errorObject.errors).length) {
    const errorsByKeys = errorObject.errors;
    // create an array of error strings
    const errorStringsArray = Object.keys(errorsByKeys).map(
      errorKey => errorsByKeys[errorKey],
    );
    // concat an array of strings to a single string with delimiter
    const concatedErrorString = errorStringsArray.join('\n');

    return concatedErrorString;
  } else if (errorObject.message) {
    return errorObject.message;
  }
  return String(errorObject);
};

const areArraysEqual = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.every((item, index) => item === arr2[index]);

const filterEmptyObjectValues = obj => {
  return Object.entries(obj)
    .filter(([_, value]) => {
      const isNotEmptyString =
        value && typeof value === 'string' && value.trim();

      const isNotEmptyNumber = value && typeof value === 'number';

      const isNotEmptyArray = value?.length && typeof value === 'object';

      const isBoolean = typeof value === 'boolean';

      return (
        isNotEmptyArray || isNotEmptyString || isNotEmptyNumber || isBoolean
      );
    })
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
};

const convertPascalCaseToSnakeCase = str => {
  return str
    ? str
        .trim()
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase()
    : '';
};

const convertObjectToRequestQuery = obj => {
  const objWithoutEmptyValues = filterEmptyObjectValues(obj);

  const query = Object.keys(objWithoutEmptyValues)
    .map(key => {
      if (Array.isArray(objWithoutEmptyValues[key])) {
        return objWithoutEmptyValues[key]
          .map((value, index) => `${key}[${index}]=${value}`)
          .join('&');
      }

      const transformedValue =
        typeof objWithoutEmptyValues[key] === 'boolean'
          ? Number(objWithoutEmptyValues[key])
          : objWithoutEmptyValues[key];

      return `${key}=${encodeURIComponent(transformedValue)}`;
    })
    .join('&');

  return query;
};

const getTagsArray = tagsEntity => {
  switch (true) {
    case Array.isArray(tagsEntity):
      return tagsEntity;
    case typeof tagsEntity === 'string':
      return tagsEntity.split(', ');
    case typeof tagsEntity === 'object':
      return Object.values(tagsEntity || {});
    default:
      return null;
  }
};

const removeProtocolFromUrlString = str =>
  str ? str.replace(/(^\w+:|^)\/\//, '') : str;

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
};
