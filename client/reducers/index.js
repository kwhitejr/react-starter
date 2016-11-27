import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import selectorReducer from './selector_reducer';
import workoutReducer from './workout_reducer';
import authReducer from './auth_reducer';

export default combineReducers({
  form: formReducer,
  selector: selectorReducer,
  workout: workoutReducer,
<<<<<<< HEAD
  auth: authReducer,
=======
>>>>>>> development
});
