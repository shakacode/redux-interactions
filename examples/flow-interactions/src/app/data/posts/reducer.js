/* @flow */

import { createReducer } from '../../../utils';

import state from './state';

import { updatePostOnEdit } from '../../ui/interactions/serverStateUpdate';

export default createReducer(state, {
  ...updatePostOnEdit,
});
