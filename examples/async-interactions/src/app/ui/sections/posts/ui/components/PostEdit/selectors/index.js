import { createStructuredSelector } from 'reselect';

import { postIdSelector } from './postIdSelector';
import { titleSelector } from './titleSelector';
import { isSubmittableSelector } from './isSubmittableSelector';
import { isProcessingSelector } from './storeDataSelector';

export default createStructuredSelector({
  postId: postIdSelector,
  title: titleSelector,
  isSubmittable: isSubmittableSelector,
  isProcessing: isProcessingSelector,
});
