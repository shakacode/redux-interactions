import { createSelector } from 'reselect';

import { getLeafState } from './getLeafData';

export const getFetchingStatus = createSelector(
  getLeafState,
  state => {
    const status = state.get('status');
    return !status || status === 'fetching';
  },
);
