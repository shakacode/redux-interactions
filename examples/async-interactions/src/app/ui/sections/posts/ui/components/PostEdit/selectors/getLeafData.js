import { createSelector } from 'reselect';

export const getLeafState = state => state.ui.posts.postEdit;

export const getFormState = createSelector(
  getLeafState,
  state => state.get('formState'),
);

export const getProcessingStatus = createSelector(
  getLeafState,
  state => state.get('isProcessing'),
);
