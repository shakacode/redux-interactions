/* @flow */

import { createSelector } from 'reselect';

import type { State } from '../../types';
import type { StoreState, PostsMap, PostsList } from './types';


export const storeSelector = (state: State): StoreState => state.data.postsStore;

export const postsMapSelector = createSelector(
  storeSelector,
  (store): PostsMap => store.get('entities'),
);

export const postsListSelector = createSelector(
  storeSelector,
  (store): PostsList =>
    store
      .get('index')
      .map(postId => store.get('entities').get(postId))
      .toList(),
);
