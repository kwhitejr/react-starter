import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import workoutSelector from './workoutSelector_reducer';

export default combineReducers({
  form: formReducer,
  workoutSelector
});
