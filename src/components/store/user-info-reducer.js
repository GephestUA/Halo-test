const DATA_RECEIVED = 'DATA-RECEIVED';

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

export const getUserData = (name, surname, phone) => ({
  type: DATA_RECEIVED,
  payload: {
    name,
    surname,
    phone,
  },
});

export default userInfoReducer;
