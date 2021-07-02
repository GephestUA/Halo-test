const SERVICE_RECEIVED = 'SERVICE-RECEIVED';
const SERVICE_SELECT = 'SERVICE-SELECT';

let initialValue = {
  service: [],
  serviceSelected: '',
};

const userServiceReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SERVICE_RECEIVED: {
      return { ...state, service: [...action.payload] };
    }
    case SERVICE_SELECT: {
      return { ...state, serviceSelected: action.payload };
    }
    default:
      return state;
  }
};

export const getService = (payload) => ({
  type: SERVICE_RECEIVED,
  payload,
});
export const selectService = (payload) => ({
  type: SERVICE_SELECT,
  payload,
});

export const getDataService = () => {
  return (dispatch) => {
    fetch('https://run.mocky.io/v3/2e37be08-fddb-41a9-8597-89ebe25744c4')
      .then((response) => response.json())
      .then((json) => dispatch(getService(json)));
  };
};

export default userServiceReducer;
