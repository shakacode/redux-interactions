/* @flow */

import { combineReducers } from 'redux';

import dataReducers from './data/reducers';
import postFormReducer from './ui/reducer';

export default combineReducers({
  data: dataReducers,
  postFormStore: postFormReducer,
});
