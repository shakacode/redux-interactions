import { createReducer } from '../utils';

import initialState from './interactions/initialState';

import { onIncrement } from './interactions/increment';
import { onDecrement } from './interactions/decrement';

export default createReducer(initialState, {
  ...onIncrement,
  ...onDecrement,
});
