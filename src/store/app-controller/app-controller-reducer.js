import { STAGE_RECEIVED } from './action';

let initialValue = {
  stage: 1,
};

const appControllerReducer = (state = initialValue, action) => {
  switch (action.type) {
    case STAGE_RECEIVED: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default appControllerReducer;
