import { SERVICE_RECEIVED, SERVICE_SELECT, PROVIDER_SELECT } from './action';

export const getService = (payload) => ({
  type: SERVICE_RECEIVED,
  payload,
});
export const selectService = (payload) => ({
  type: SERVICE_SELECT,
  payload,
});
export const selectProvider = (payload) => ({
  type: PROVIDER_SELECT,
  payload,
});
