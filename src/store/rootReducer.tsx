import { combineReducers } from 'redux';
import getTrainsReducer from './getTrainsSlice';

const rootReducer = combineReducers({
  getTrains: getTrainsReducer,
});

export default rootReducer;
