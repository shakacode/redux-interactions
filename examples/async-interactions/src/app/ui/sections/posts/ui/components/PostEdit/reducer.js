import { createReducer } from '../../../../../../../utils';

import initialState from './interactions/initialState';

import { onFormStateReset } from './interactions/formStateReset';
import { onFormStateUpdate } from './interactions/formStateUpdate';
import { onServerStateUpdate } from './interactions/serverStateUpdate';


export default createReducer(initialState, {
  ...onFormStateReset,
  ...onFormStateUpdate,
  ...onServerStateUpdate,
});
