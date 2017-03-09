/* @flow */

import api from '../../../api';

import type { Thunk } from '../../types';
import type { StoreState } from '../state';
import type { StoreState as PostsStoreState } from '../../data/posts/types';
import type { ActionHandler } from '../../types';

import { insuredTitleInputSelector, isProcessingSelector } from '../selectors/storeDataSelector';
import { isSubmittableSelector } from '../selectors/isSubmittableSelector';


const UPDATE_REQUESTED: 'POST_FORM # SERVER_STATE_UPDATE_REQUESTED' = 'POST_FORM # SERVER_STATE_UPDATE_REQUESTED';
const UPDATE_SUCCEEDED: 'POST_FORM # SERVER_STATE_UPDATE_SUCCEEDED' = 'POST_FORM # SERVER_STATE_UPDATE_SUCCEEDED';
const UPDATE_FAILED: 'POST_FORM # SERVER_STATE_UPDATE_FAILED' = 'POST_FORM # SERVER_STATE_UPDATE_FAILED';

type Payload = {| title: string |};


// --- Request

// Action creator
type RequestAction = {| type: typeof UPDATE_REQUESTED |};

const requestAction = (): RequestAction => ({ type: UPDATE_REQUESTED });


// Action handler
type OnRequest = {
  [typeof UPDATE_REQUESTED]: ActionHandler<StoreState, RequestAction>,
};

const onRequest: OnRequest = {
  [UPDATE_REQUESTED]:
    state =>
      state.set('isProcessing', true),
};


// --- Success

// Action creator
type SuccessAction = {|
  type: typeof UPDATE_SUCCEEDED,
  postId: number,
  nextServerData: Payload,
|};

const successAction = (
  postId: number,
  nextServerData: Payload,
): SuccessAction => ({
  type: UPDATE_SUCCEEDED,
  postId,
  nextServerData,
});

// Action handler -> local
type OnSuccess = {
  [typeof UPDATE_SUCCEEDED]: ActionHandler<StoreState, SuccessAction>,
};

const onSuccess: OnSuccess = {
  [UPDATE_SUCCEEDED]:
    state =>
      state
        .set('titleInput', null)
        .set('isProcessing', false),
};

// Action handler -> data/postsStore: update entity in posts data store
type UpdatePostOnEdit = {
  [typeof UPDATE_SUCCEEDED]: ActionHandler<PostsStoreState, SuccessAction>,
};

const updatePostOnEdit: UpdatePostOnEdit = {
  [UPDATE_SUCCEEDED]:
    (state, { postId, nextServerData }) =>
      // $FlowFixMe: Record methods inherited from Map aren't typed yet
      state.mergeIn(['entities', postId], nextServerData),
};


// --- Failure

// Action creator
type FailureAction = {|
  type: typeof UPDATE_FAILED,
  error: Error,
|};

const failureAction = (error: Error): FailureAction => ({
  type: UPDATE_FAILED,
  error,
});

// Action handler
type OnFailure = {
  [typeof UPDATE_FAILED]: ActionHandler<StoreState, FailureAction>,
};

const onFailure: OnFailure = {
  [UPDATE_FAILED]:
    state =>
      state.set('isProcessing', false),
};


// --- Exports

// Thunk
export const updateServerState =
  (postId: number): Thunk => (dispatch, getState) => {
    const state = getState();

    const isSubmittable = isSubmittableSelector(state);
    const isProcessing = isProcessingSelector(state);

    if (!isSubmittable || isProcessing) return;

    dispatch(requestAction());

    // We're making sure that title input is not null above
    // But flow can't infer, so assuring flow (see `insuredTitleInputSelector`)
    const nextServerData = { title: insuredTitleInputSelector(state) };

    api
      .patchPost(postId, nextServerData)
      .then(
        // success
        () => dispatch(successAction(postId, nextServerData)),

        // failure
        error => dispatch(failureAction(error)),
      )
    ;
  }
;


// Action handlers
export const onServerStateUpdate = {
  ...onRequest,
  ...onSuccess,
  ...onFailure,
};

export { updatePostOnEdit };
