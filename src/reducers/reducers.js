import { combineReducers } from 'redux';
import amountReducer from './amountReducer';
import tagReducer from './tagReducer';

export default combineReducers({
  counter: amountReducer,
  tag: tagReducer
});
