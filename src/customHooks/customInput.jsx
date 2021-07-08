import { useState } from 'react';
import useValidation from './customValidation';

export default function useInput(initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [noValid, setValid] = useState(false);

  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setValid(true);
  };

  return {
    bind: {
      value,
      onChange,
      onBlur,
    },
    ...valid,
    noValid,
    value,
    setValue,
  };
}
