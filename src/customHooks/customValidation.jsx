import { useEffect, useState } from 'react';

export default function useValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [checkName, setCheckName] = useState({
    status: true,
    text: '',
  });
  const [checkPhone, setCheckPhone] = useState({
    status: true,
    text: '',
  });

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'checkName':
          const regular = /^[a-zA-Z][a-zA-Z0-9-_.]{1,24}$/;
          regular.test(value)
            ? setCheckName({
                status: false,
                text: '',
              })
            : setCheckName({
                status: true,
                text: 'Only Latin letters and numbers (min-max 2-25 letter)',
              });
          break;
        case 'checkPhone':
          const regularPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
          regularPhone.test(value)
            ? setCheckPhone({
                status: false,
                text: '',
              })
            : setCheckPhone({
                status: true,
                text: 'Wrong number enter "XXX-XXX-XXXX" or "(XXX)XXXXXXX"',
              });
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        default:
          return validations;
      }
    }
  }, [value, validations]);

  return {
    checkName,
    isEmpty,
    checkPhone,
  };
}
