/* @flow */

import { createSelector } from 'reselect';

import { postsMapSelector } from '../../data/posts/selectors';
import { postIdSelector } from './postIdSelector';
import { titleInputSelector } from './storeDataSelector';

export const isSubmittableSelector = createSelector(
  postIdSelector,
  postsMapSelector,
  titleInputSelector,
  (postId, postsMap, titleInput): boolean =>
    !!titleInput && postsMap.get(postId).get('title') !== titleInput,
);
