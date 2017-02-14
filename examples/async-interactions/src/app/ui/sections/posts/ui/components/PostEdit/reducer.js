import { createReducer } from '../../../../../../../utils';

import state from './state';

import { onFormStateReset } from './interactions/formStateReset';
import { onFormStateUpdate } from './interactions/formStateUpdate';
import { onServerStateUpdate } from './interactions/serverStateUpdate';


export default createReducer(state, {
  ...onFormStateReset,
  ...onFormStateUpdate,
  ...onServerStateUpdate,
});
