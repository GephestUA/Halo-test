import { STAGE_RECEIVED } from './action';

export const getStageInfo = (stage) => ({
  type: STAGE_RECEIVED,
  payload: {
    stage,
  },
});
