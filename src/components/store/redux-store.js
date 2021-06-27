import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userInfoReducer from './user-info-reducer';

let reducers = combineReducers({
  userInfo: userInfoReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
