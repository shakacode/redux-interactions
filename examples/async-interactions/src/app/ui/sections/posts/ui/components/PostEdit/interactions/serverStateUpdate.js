import api from '../../../../../../../../api';

import initialState from '../state';

import { getFormState, getProcessingStatus } from '../selectors/getLeafData';
import { getSubmittableStatus } from '../selectors/getSubmittableStatus';


const UPDATE_REQUESTED = 'POST_EDIT: SERVER_STATE_UPDATE_REQUESTED';
const UPDATE_SUCCEEDED = 'POST_EDIT: SERVER_STATE_UPDATE_SUCCEEDED';
const UPDATE_FAILED = 'POST_EDIT: SERVER_STATE_UPDATE_FAILED';

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

// Action handlers
const onSuccess = {
  [UPDATE_SUCCEEDED]: [
    // 1. resetting ui state
    () => initialState,

    // 2. updating data in the entities leaf
    {
      leaf: ['entities', 'posts'],
      reduce:
        (state, { postId, nextServerData }) =>
          state.mergeIn(['entities', postId], nextServerData),
    }
  ],
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

  const isSubmittable = getSubmittableStatus(state, props);
  const isProcessing = getProcessingStatus(state);

  if (!isSubmittable || isProcessing) return;

  dispatch(requestAction());

  const nextServerData = getFormState(state);

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
