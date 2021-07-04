import { getService } from './action-creators';

export const getDataService = () => {
  return (dispatch) => {
    fetch('https://run.mocky.io/v3/2e37be08-fddb-41a9-8597-89ebe25744c4')
      .then((response) => response.json())
      .then((json) => dispatch(getService(json)));
  };
};
