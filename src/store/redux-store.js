import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appControllerReducer from './app-controller/app-controller-reducer';
import userInfoReducer from './user-info/user-info-reducer';
import userServiceReducer from './service-reducer/service-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  userInfo: userInfoReducer,
  services: userServiceReducer,
  appControls: appControllerReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
