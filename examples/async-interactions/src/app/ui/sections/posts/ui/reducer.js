import { createReducer } from '../../../../../utils';

import initialState from './interactions/initialState';

import { onPostsFetch } from './interactions/postsFetch';
import { onStateReset } from './interactions/stateReset';


export default createReducer(initialState, {
  ...onPostsFetch,
  ...onStateReset,
});
