import api from '../../../../../../../../api';

import state from '../state';

import { formStateSelector, isProcessingSelector } from '../selectors/storeDataSelector';
import { isSubmittableSelector } from '../selectors/isSubmittableSelector';


const UPDATE_REQUESTED = 'POST_EDIT # SERVER_STATE_UPDATE_REQUESTED';
const UPDATE_SUCCEEDED = 'POST_EDIT # SERVER_STATE_UPDATE_SUCCEEDED';
const UPDATE_FAILED = 'POST_EDIT # SERVER_STATE_UPDATE_FAILED';

// --- Request

// Action creator
const requestAction = () => ({ type: UPDATE_REQUESTED });

// Action handler
const onRequest = {
  [UPDATE_REQUESTED]:
    state =>
      state.set('isProcessing', true),
};


// --- Success

// Action creator
const successAction = (postId, nextServerData) => ({
  type: UPDATE_SUCCEEDED,
  postId,
  nextServerData,
});

// Action handler -> local
const onSuccess = {
  [UPDATE_SUCCEEDED]: () => state,
};

// Action handler -> data/postsStore: update entity in posts data store
const updatePostOnEdit = {
  [UPDATE_SUCCEEDED]:
    (state, { postId, nextServerData }) =>
      state.mergeIn(['entities', postId], nextServerData),
};


// --- Failure

// Action creator
const failureAction = (error) => ({
  type: UPDATE_FAILED,
  error,
});

// Action handler
const onFailure = {
  [UPDATE_FAILED]:
    state =>
      state.set('isProcessing', false), // No error handling today
};


// --- Exports

// Thunk
export const updateServerState = postId => (dispatch, getState) => {
  const state = getState();
  const props = { postId };

  const isSubmittable = isSubmittableSelector(state, props);
  const isProcessing = isProcessingSelector(state);

  if (!isSubmittable || isProcessing) return;

  dispatch(requestAction());

  const nextServerData = formStateSelector(state);

  api
    .patchPost(postId, nextServerData)
    .then(
      // success
      () => dispatch(successAction(postId, nextServerData)),

      // failure
      error => dispatch(failureAction(error)),
    )
  ;
};


// Action handlers
export const onServerStateUpdate = {
  ...onRequest,
  ...onSuccess,
  ...onFailure,
};

export { updatePostOnEdit };
