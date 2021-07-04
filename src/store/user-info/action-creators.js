import { DATA_RECEIVED } from './action';

export const setUserData = (name, surname, phone) => ({
  type: DATA_RECEIVED,
  payload: {
    name,
    surname,
    phone,
  },
});
