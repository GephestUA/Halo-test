import { DATA_RECEIVED } from './action';

let initialValue = {
  name: '',
  surname: '',
  phone: '',
};

const userInfoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case DATA_RECEIVED: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default userInfoReducer;
