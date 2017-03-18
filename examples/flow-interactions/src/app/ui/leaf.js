/* @flow */

import { createLeaf } from 'redux-tree';

import state from './state';

import { onPostSelect } from './interactions/postSelect';
import { onTitleInputUpdate } from './interactions/titleInputUpdate';
import { onServerStateUpdate } from './interactions/serverStateUpdate';

export default createLeaf(state, {
  ...onPostSelect,
  ...onTitleInputUpdate,
  ...onServerStateUpdate,
});
