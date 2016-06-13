import { combineReducers } from 'redux';
import NavReducer from './reducer-nav';

const rootReducer = combineReducers({
  selectedNav: NavReducer
});

export default rootReducer;
