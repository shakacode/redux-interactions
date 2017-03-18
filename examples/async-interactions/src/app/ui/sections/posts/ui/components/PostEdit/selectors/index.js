import { createStructuredSelector } from 'reselect';

import { getPostId } from './getPostId';
import { getTitle } from './getTitle';
import { getSubmittableStatus } from './getSubmittableStatus';
import { getProcessingStatus } from './getLeafData';

export default createStructuredSelector({
  postId: getPostId,
  title: getTitle,
  isSubmittable: getSubmittableStatus,
  isProcessing: getProcessingStatus,
});
