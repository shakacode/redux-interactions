/* @flow */

import { createSelector } from 'reselect';

import type { State } from '../../tree';
import type { LeafState } from './state';
import type { PostsMap, PostsList } from './entity';

// $FlowFixMe: Record dot notation
export const getLeafState = (state: State): LeafState => state.entities.posts;

export const getPostsMap = createSelector(
  getLeafState,
  (state): PostsMap => state.get('entities'),
);

export const getPostsList = createSelector(
  getLeafState,
  (state): PostsList =>
    state
      .get('index')
      // $FlowFixMe: Record getIn method
      .map(postId => state.getIn(['entities', postId]))
      .toList(),
);
