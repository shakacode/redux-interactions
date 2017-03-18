/* @flow */

import { createSelector } from 'reselect';

import { getPostsMap } from '../../entities/posts/selectors';
import { getPostId } from './getPostId';
import { getTitleInput } from './getLeafData';

export const getSubmittableStatus = createSelector(
  getPostId,
  getPostsMap,
  getTitleInput,
  (postId, postsMap, titleInput): boolean =>
    !!titleInput && postsMap.getIn([postId, 'title']) !== titleInput,
);
