/* @flow */

import { createReducer } from '../../utils';

import state from './state';

import { onPostSelect } from './interactions/postSelect';
import { onTitleInputUpdate } from './interactions/titleInputUpdate';
import { onServerStateUpdate } from './interactions/serverStateUpdate';


export default createReducer(state, {
  ...onPostSelect,
  ...onTitleInputUpdate,
  ...onServerStateUpdate,
});
