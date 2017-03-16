import { createLeaf } from 'redux-tree';

import state from './state';

import { onFormStateReset } from './interactions/formStateReset';
import { onFormStateUpdate } from './interactions/formStateUpdate';
import { onServerStateUpdate } from './interactions/serverStateUpdate';


export default createLeaf(state, {
  ...onFormStateReset,
  ...onFormStateUpdate,
  ...onServerStateUpdate,
});
