import { createSelector } from 'reselect';

import { storeSelector } from './storeDataSelector';

export const isFetchingSelector = createSelector(
  storeSelector,
  store => {
    const status = store.get('status');
    return !status || status === 'fetching';
  },
);
