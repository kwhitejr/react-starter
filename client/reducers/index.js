import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import selector from './workoutSelector_reducer';

export default combineReducers({
  form: formReducer,
  selector
});
