import { createStructuredSelector } from 'reselect';

import { getFetchingStatus } from '../../../../sections/posts/ui/selectors/getFetchingStatus';
import { getProcessingStatus } from '../../../../sections/posts/ui/components/PostEdit/selectors/getLeafData';

export default createStructuredSelector({
  isFetching: getFetchingStatus,
  isProcessing: getProcessingStatus,
});
