import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import MetarsReducer from './reducer_metars';

const rootReducer = combineReducers({
  metars: MetarsReducer,
  form: formReducer
});

export default rootReducer;
