import { STAGE_RECEIVED, STAGE_RESET } from './action';
import { initialValue } from './app-controller-reducer';

export const getStageInfo = (stage) => ({
  type: STAGE_RECEIVED,
  payload: {
    stage,
  },
});

export const resetStage = () => ({
  type: STAGE_RESET,
  payload: {
    ...initialValue,
  },
});
