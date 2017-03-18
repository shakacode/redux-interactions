/* @flow */

import api from '../../../api';

import type { Thunk } from '../../types';
import type { LeafState } from '../state';
import type { LeafState as PostsLeafState } from '../../entities/posts/state';
import type { ActionHandler, ActionHandlerAtLeaf } from '../../types';

import { getInsuredTitleInput, getProcessingStatus } from '../selectors/getLeafData';
import { getSubmittableStatus } from '../selectors/getSubmittableStatus';


const UPDATE_REQUESTED: 'POST_FORM: SERVER_STATE_UPDATE_REQUESTED' = 'POST_FORM: SERVER_STATE_UPDATE_REQUESTED';
const UPDATE_SUCCEEDED: 'POST_FORM: SERVER_STATE_UPDATE_SUCCEEDED' = 'POST_FORM: SERVER_STATE_UPDATE_SUCCEEDED';
const UPDATE_FAILED: 'POST_FORM: SERVER_STATE_UPDATE_FAILED' = 'POST_FORM: SERVER_STATE_UPDATE_FAILED';

type Payload = {| title: string |};


// --- Request

// Action creator
type RequestAction = {| type: typeof UPDATE_REQUESTED |};

const requestAction = (): RequestAction => ({ type: UPDATE_REQUESTED });


// Action handler
type OnRequest = {
  [typeof UPDATE_REQUESTED]: ActionHandler<LeafState, RequestAction>,
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
  [typeof UPDATE_SUCCEEDED]: [
    ActionHandler<LeafState, SuccessAction>,
    ActionHandlerAtLeaf<PostsLeafState, SuccessAction>,
  ],
};

const onSuccess: OnSuccess = {
  [UPDATE_SUCCEEDED]: [
    // 1. reset ui state
    state =>
      state
        .set('titleInput', null)
        .set('isProcessing', false),

    {
      leaf: ['entities', 'posts'],
      reduce:
        (state, { postId, nextServerData }) =>
          // $FlowFixMe: Record mergeIn method
          state.mergeIn(['entities', postId], nextServerData),
    },
  ],
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
  [typeof UPDATE_FAILED]: ActionHandler<LeafState, FailureAction>,
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

    const isSubmittable = getSubmittableStatus(state);
    const isProcessing = getProcessingStatus(state);

    if (!isSubmittable || isProcessing) return;

    dispatch(requestAction());

    // We're making sure that title input is not null above
    // But flow can't infer, so assuring flow (see `insuredTitleInputSelector`)
    const nextServerData = { title: getInsuredTitleInput(state) };

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
