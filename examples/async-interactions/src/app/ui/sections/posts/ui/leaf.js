import { createLeaf } from 'redux-tree';

import state from './state';

import { onPostsFetch } from './interactions/postsFetch';
import { onStateReset } from './interactions/stateReset';

export default createLeaf(state, {
  ...onPostsFetch,
  ...onStateReset,
});
