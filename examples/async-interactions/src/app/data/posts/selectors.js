import { createSelector } from 'reselect';

export const storeSelector = state => state.getIn(['data', 'postsStore']);

export const postsSelector = createSelector(
  storeSelector,
  store =>
    store
      .get('index')
      .map(postId => store.getIn(['entities', postId])),
);
