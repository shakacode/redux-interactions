import { createSelector } from 'reselect';

import { getPost } from './getPost';
import { getFormState } from './getLeafData';

export const getTitle = createSelector(
  getPost,
  getFormState,
  (post, formState) => (
    formState.get('title') !== null
    ? formState.get('title')
    : post.get('title')
  ),
);
