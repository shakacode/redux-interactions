/* @flow */

import type { StoreState } from './initialState';
import type { ReducerHandler } from '../../types';


const POST_SELECT: 'POST_FORM # POST_SELECT' = 'POST_FORM # POST_SELECT';

// Action creator
type Action = {|
  type: typeof POST_SELECT,
  postId: number,
|};

export const selectPost = (postId: string): Action => ({
  type: POST_SELECT,
  postId: parseInt(postId, 10),
});


// Reducer handler
type OnPostSelect = {
  [typeof POST_SELECT]: ReducerHandler<StoreState, Action>,
};

export const onPostSelect: OnPostSelect = {
  [POST_SELECT]:
    (state, { postId }) =>
      state
        .set('postId', postId)
        .set('titleInput', null),
};
