import { createStructuredSelector } from 'reselect';

import { isFetchingSelector } from '../../../../sections/posts/ui/selectors/isFetchingSelector';
import { isProcessingSelector } from '../../../../sections/posts/ui/components/PostEdit/selectors/storeDataSelector';

export default createStructuredSelector({
  isFetching: isFetchingSelector,
  isProcessing: isProcessingSelector,
});
