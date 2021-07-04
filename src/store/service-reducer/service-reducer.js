import { SERVICE_RECEIVED, SERVICE_SELECT, PROVIDER_SELECT } from './action';

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

export default userServiceReducer;
