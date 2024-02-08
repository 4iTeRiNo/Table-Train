import { combineReducers } from 'redux';
import trainReducer from './getTrainSlice';

const rootReducer = combineReducers({
  getTrain: trainReducer,
});

export default rootReducer;
