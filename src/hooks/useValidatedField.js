import {useState} from 'react';

import {GET_REGEXP_BY_FIELD_TYPE} from '@constants';

const useValidatedField = (initialValue, fieldType, isRequired = false) => {
  const [fieldValue, setFieldValue] = useState(initialValue);
  const [validationError, setValidationError] = useState(null);

  const handleSetFieldValue = newValue => {
    setValidationError(null);
    setFieldValue(newValue);
  };

  const validateField = () => {
    const regexp = GET_REGEXP_BY_FIELD_TYPE(fieldType, isRequired);
    const isFieldFormatValid = regexp
      ? regexp.test(fieldValue?.trim() || '')
      : true;

    if (!isFieldFormatValid) {
      setValidationError(true);
    }

    return isFieldFormatValid;
  };

  return [fieldValue, handleSetFieldValue, validationError, validateField];
};

export default useValidatedField;
