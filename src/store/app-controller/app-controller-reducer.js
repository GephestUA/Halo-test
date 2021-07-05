import { STAGE_RECEIVED, STAGE_RESET } from './action';

export const initialValue = {
  stage: 3,
};

const appControllerReducer = (state = initialValue, action) => {
  switch (action.type) {
    case STAGE_RECEIVED: {
      return { ...state, ...action.payload };
    }
    case STAGE_RESET: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default appControllerReducer;
