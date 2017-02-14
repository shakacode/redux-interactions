import { normalize, arrayOf } from '../../../../../../utils';
import api from '../../../../../../api';
import * as schemas from '../../../../../data/schemas';


const FETCH_REQUESTED = 'POSTS_FETCH # REQUESTED';
const FETCH_SUCCEEDED = 'POSTS_FETCH # SUCCEEDED';
const FETCH_FAILED = 'POSTS_FETCH # FAILED';

// --- Request

// Action creator
const requestAction = () => ({ type: FETCH_REQUESTED });

// Reducer handler
const onRequest = {
  [FETCH_REQUESTED]:
    state =>
      state.set('status', 'fetching'),
};


// --- Success

// Action creator
const successAction = (ids, posts) => ({
  type: FETCH_SUCCEEDED,
  index: ids,
  entities: posts,
});

// Reducer handler -> local
const onSuccess = {
  [FETCH_SUCCEEDED]:
    state =>
      state.set('status', 'ready'),
};

// Reducer handler -> data/postsStore: merging fetched data into posts data store
const mergePostsOnFetch = {
  [FETCH_SUCCEEDED]:
    (state, { index, entities }) =>
      state.merge({ index, entities }),
};


// --- Failure

// Action creator
const failureAction = error => ({
  type: FETCH_FAILED,
  error,
});

// Reducer handler
const onFailure = {
  [FETCH_FAILED]:
    state =>
      state.set('status', 'failure'),
};


// --- Exports

// Thunk
export const fetchPosts = () => dispatch => {
  dispatch(requestAction());

  api
    .getPosts()
    .then(
      // success
      response => {
        const { result, entities } = normalize(response.posts, arrayOf(schemas.post));
        dispatch(successAction(result, entities.posts));
      },

      // failure
      error => dispatch(failureAction(error)),
    )
  ;
};


// Reducers
export const onPostsFetch = {
  ...onRequest,
  ...onSuccess,
  ...onFailure,
};

export { mergePostsOnFetch };
