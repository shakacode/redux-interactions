import { createReducer } from '../../../../../utils';

import state from './state';

import { onPostsFetch } from './interactions/postsFetch';
import { onStateReset } from './interactions/stateReset';


export default createReducer(state, {
  ...onPostsFetch,
  ...onStateReset,
});
