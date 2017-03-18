/* @flow */

import { createSelector } from 'reselect';

import type { State } from '../../tree';
import type { LeafState } from '../state';

// $FlowFixMe: Record dot notation
export const getLeafState = (state: State): LeafState => state.postForm;

export const getPostId = createSelector(
  getLeafState,
  (state): number | null => state.get('postId'),
);

export const getTitleInput = createSelector(
  getLeafState,
  (state): string | null => state.get('titleInput'),
);

export const getInsuredTitleInput = createSelector(
  getLeafState,
  (state): string => {
    const titleInput = state.get('titleInput');
    if (!titleInput) throw new Error();
    return titleInput;
  },
);

export const getProcessingStatus = createSelector(
  getLeafState,
  (state): boolean => state.get('isProcessing'),
);
