/* @flow */

import { createSelector } from 'reselect';

import { postsListSelector } from '../../data/posts/selectors';
import { postIdSelector as chosenPostIdSelector } from './storeDataSelector';

export const postIdSelector = createSelector(
  chosenPostIdSelector,
  postsListSelector,
  (chosenPostId, postsList): number => chosenPostId || postsList.first().get('id'),
);
