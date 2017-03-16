import { createStructuredSelector } from 'reselect';

import { getFetchingStatus } from './getFetchingStatus';

export default createStructuredSelector({
  isFetching: getFetchingStatus,
});
