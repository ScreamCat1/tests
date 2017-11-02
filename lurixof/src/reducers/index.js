import { combineReducers } from 'redux'
import data from './data';
import currentItem from './current-item';

const rootReducers = combineReducers({
  data,
  currentItem
});

export default rootReducers;
