/* @flow */

import { combineReducers } from 'redux';

import postsReducer from './posts/reducer';

// Combinig all data stores
export default combineReducers({
  postsStore: postsReducer,
  // more data stores...
});
