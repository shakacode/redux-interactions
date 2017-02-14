import { createStructuredSelector } from 'reselect';

import { isFetchingSelector } from './isFetchingSelector';

export default createStructuredSelector({
  isFetching: isFetchingSelector,
});
