const SERVICE_RECEIVED = 'service/SERVICE-RECEIVED';
const SERVICE_SELECT = 'service/SERVICE-SELECT';
const PROVIDER_SELECT = 'service/PROVIDER-SELECT';

let initialValue = {
  service: [],
  serviceSelected: '',
  providerSelected: '',
};

const userServiceReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SERVICE_RECEIVED: {
      return { ...state, service: [...action.payload] };
    }
    case SERVICE_SELECT: {
      return { ...state, serviceSelected: action.payload };
    }
    case PROVIDER_SELECT: {
      return { ...state, providerSelected: action.payload };
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
export const selectProvider = (payload) => ({
  type: PROVIDER_SELECT,
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
