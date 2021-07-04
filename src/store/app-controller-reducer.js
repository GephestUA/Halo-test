const STAGE_RECEIVED = 'app-controller/STAGE-RECEIVED';

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

export const getStageInfo = (stage) => ({
  type: STAGE_RECEIVED,
  payload: {
    stage,
  },
});

export default appControllerReducer;
