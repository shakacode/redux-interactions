/* @flow */

import { createStructuredSelector } from 'reselect';

import { getPostsList } from '../../entities/posts/selectors';
import { getPostId } from './getPostId';
import { getTitle } from './getTitle';
import { getSubmittableStatus } from './getSubmittableStatus';
import { getProcessingStatus } from './getLeafData';

export default createStructuredSelector({
  postId: getPostId,
  posts: getPostsList,
  title: getTitle,
  isSubmittable: getSubmittableStatus,
  isProcessing: getProcessingStatus,
});
