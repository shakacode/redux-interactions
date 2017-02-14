/* @flow */

import type { StoreState } from '../state';
import type { ActionHandler } from '../../types';


const TITLE_INPUT_UPDATE: 'POST_FORM # TITLE_INPUT_UPDATE' = 'POST_FORM # TITLE_INPUT_UPDATE';

// Action creator
type Action = {|
  type: typeof TITLE_INPUT_UPDATE,
  nextTitle: string,
|};

export const updateTitleInput = (nextTitle: string): Action => ({
  type: TITLE_INPUT_UPDATE,
  nextTitle,
});


// Action handler
type OnTitleInputUpdate = {
  [typeof TITLE_INPUT_UPDATE]: ActionHandler<StoreState, Action>,
};

export const onTitleInputUpdate: OnTitleInputUpdate = {
  [TITLE_INPUT_UPDATE]:
    (state, { nextTitle }) =>
      state.set('titleInput', nextTitle),
};
