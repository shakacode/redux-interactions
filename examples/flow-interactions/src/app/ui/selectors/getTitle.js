/* @flow */

import { createSelector } from 'reselect';

import { getPostsMap } from '../../entities/posts/selectors';
import { getPostId } from './getPostId';
import { getTitleInput } from './getLeafData';

export const getTitle = createSelector(
  getPostId,
  getPostsMap,
  getTitleInput,
  (postId, postsMap, titleInput): string =>
    // $FlowFixMe: Record getIn method
    titleInput || postsMap.getIn([postId, 'title']),
);
