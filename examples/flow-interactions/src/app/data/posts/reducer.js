/* @flow */

import { createReducer } from '../../../utils';

import initialState from './state';

import { updatePostOnEdit } from '../../ui/interactions/serverStateUpdate';

export default createReducer(initialState, {
  ...updatePostOnEdit,
});
