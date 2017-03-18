/* @flow */

import { createSelector } from 'reselect';

import { getPostsList } from '../../entities/posts/selectors';
import { getPostId as getChosenPostId } from './getLeafData';

export const getPostId = createSelector(
  getChosenPostId,
  getPostsList,
  (chosenPostId, postsList): number => chosenPostId || postsList.first().get('id'),
);
