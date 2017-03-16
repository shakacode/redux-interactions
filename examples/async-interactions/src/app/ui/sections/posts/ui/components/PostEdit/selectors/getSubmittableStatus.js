import { createSelector } from 'reselect';

import { getPost } from './getPost';
import { getFormState } from './getLeafData';

export const getSubmittableStatus = createSelector(
  getPost,
  getFormState,
  (post, formState) =>
    formState.get('title')
    && post.get('title') !== formState.get('title'),
);
