/* @flow */

import { createReducer } from '../../utils';

import initialState from './interactions/initialState';

import { onPostSelect } from './interactions/postSelect';
import { onTitleInputUpdate } from './interactions/titleInputUpdate';
import { onServerStateUpdate } from './interactions/serverStateUpdate';


export default createReducer(initialState, {
  ...onPostSelect,
  ...onTitleInputUpdate,
  ...onServerStateUpdate,
});
