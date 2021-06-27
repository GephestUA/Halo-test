const DATA_RECEIVED = 'DATA-RECEIVED';

let initialValue = {
  getInfo: false,
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

export const userData = (name) => ({
  type: DATA_RECEIVED,
  payload: {
    name,
  },
});
