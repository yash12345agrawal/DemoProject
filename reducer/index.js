// reducers/index.js

import { combineReducers } from 'redux';
import employeeReducer from '../employeeSlice';

const rootReducer = combineReducers({
  employee: employeeReducer,
  // Add other reducers here if needed
});

export default rootReducer;
