/* @flow */

import { createStructuredSelector } from 'reselect';

import { postsListSelector } from '../../data/posts/selectors';
import { postIdSelector } from './postIdSelector';
import { titleSelector } from './titleSelector';
import { isSubmittableSelector } from './isSubmittableSelector';
import { isProcessingSelector } from './storeDataSelector';

export default createStructuredSelector({
  postId: postIdSelector,
  posts: postsListSelector,
  title: titleSelector,
  isProcessing: isProcessingSelector,
  isSubmittable: isSubmittableSelector,
});
