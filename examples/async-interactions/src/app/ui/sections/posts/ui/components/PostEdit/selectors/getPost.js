import { createSelector } from 'reselect';

import { getLeafState as getPostsLeafState } from '../../../../../../../entities/posts/selectors';
import { getPostId } from './getPostId';

export const getPost = createSelector(
  getPostId,
  getPostsLeafState,
  (postId, postsLeafState) => postsLeafState.getIn(['entities', postId]),
);
