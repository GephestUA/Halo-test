import { combineReducers, createStore } from 'redux';

let reducers = combineReducers({
  userInfo: userInfoReducer,
});

const store = createStore(reducers);
