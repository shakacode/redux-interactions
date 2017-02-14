import { createSelector } from 'reselect';

export const storeSelector = state => state.getIn(['postsSection', 'postEditStore']);

export const formStateSelector = createSelector(
  storeSelector,
  store => store.get('formState'),
);

export const isProcessingSelector = createSelector(
  storeSelector,
  store => store.get('isProcessing'),
);
