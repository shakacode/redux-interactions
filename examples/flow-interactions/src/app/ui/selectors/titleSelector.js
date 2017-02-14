/* @flow */

import { createSelector } from 'reselect';

import { postsMapSelector } from '../../data/posts/selectors';
import { postIdSelector } from './postIdSelector';
import { titleInputSelector } from './storeDataSelector';

export const titleSelector = createSelector(
  postIdSelector,
  postsMapSelector,
  titleInputSelector,
  (postId, postsMap, titleInput): string => titleInput || postsMap.get(postId).get('title'),
  //                                                              ^
  //                                                              Can't do `getIn()`, b/c Record is not fully typed yet
);
