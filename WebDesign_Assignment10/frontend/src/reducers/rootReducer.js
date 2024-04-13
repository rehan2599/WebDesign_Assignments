// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
// Import other reducers here

const rootReducer = combineReducers({
  auth: authReducer,
  // Other reducers can be added here
});

export default rootReducer;
