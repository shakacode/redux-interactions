import { OrderedSet } from 'immutable';
import { normalize } from 'normalizr';

import api from '../../../../../../api';
import { normalizeEntities } from '../../../../../../utils';

import * as schema from '../../../../../entities/schema';
import { Post } from '../../../../../entities/posts/entity';

const FETCH_REQUESTED = 'POSTS_FETCH: REQUESTED';
const FETCH_SUCCEEDED = 'POSTS_FETCH: SUCCEEDED';
const FETCH_FAILED = 'POSTS_FETCH: FAILED';

// --- Request

// Action creator
const requestAction = () => ({ type: FETCH_REQUESTED });

// Action handler
const onRequest = {
  [FETCH_REQUESTED]:
    state =>
      state.set('status', 'fetching'),
};


// --- Success

// Action creator
const successAction = (index, entities) => ({
  type: FETCH_SUCCEEDED,
  index,
  entities,
});

// Action handlers
const onSuccess = {
  [FETCH_SUCCEEDED]: [
    // 1. change status in the ui store
    state => state.set('status', 'ready'),

    // 2. merge posts to the entities leaf
    {
      leaf: ['entities', 'posts'],
      reduce:
        (state, { index, entities }) =>
          state.merge({ index, entities }),
    },
  ],
};


// --- Failure

// Action creator
const failureAction = error => ({
  type: FETCH_FAILED,
  error,
});

// Action handler
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
        const { result, entities } = normalize(response.posts, schema.posts);
        const index = new OrderedSet(result);
        const posts = normalizeEntities(entities.posts, Post);

        dispatch(successAction(index, posts));
      },

      // failure
      error => dispatch(failureAction(error)),
    )
  ;
};


// Action handlers
export const onPostsFetch = {
  ...onRequest,
  ...onSuccess,
  ...onFailure,
};
