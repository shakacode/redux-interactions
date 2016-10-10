/* @flow */

import { createSelector } from 'reselect';

import type { State } from '../../types';
import type { StoreState } from '../interactions/initialState';


export const storeSelector = (state: State): StoreState => state.postFormStore;

export const postIdSelector = createSelector(
  storeSelector,
  (store): number | null => store.get('postId'),
);

export const titleInputSelector = createSelector(
  storeSelector,
  (store): string | null => store.get('titleInput'),
);

export const insuredTitleInputSelector = createSelector(
  storeSelector,
  (store): string => {
    const titleInput = store.get('titleInput');
    if (!titleInput) throw new Error();
    return titleInput;
  },
);

export const isProcessingSelector = createSelector(
  storeSelector,
  (store): boolean => store.get('isProcessing'),
);
