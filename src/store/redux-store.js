import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appControllerReducer from './app-controller-reducer';
import userInfoReducer from './user-info-reducer';

let reducers = combineReducers({
  userInfo: userInfoReducer,
  appControls: appControllerReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
