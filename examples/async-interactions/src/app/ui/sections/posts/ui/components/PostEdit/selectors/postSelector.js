import { createSelector } from 'reselect';

import { storeSelector as postsStoreSelector } from '../../../../../../../data/posts/selectors';
import { postIdSelector } from './postIdSelector';

export const postSelector = createSelector(
  postIdSelector,
  postsStoreSelector,
  (postId, postsStore) => postsStore.getIn(['entities', postId])
);
