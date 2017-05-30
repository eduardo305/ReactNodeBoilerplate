import { combineReducers } from 'redux';
import WelcomeReducer from './WelcomeReducer';

export default combineReducers({
  msg: WelcomeReducer,
});
