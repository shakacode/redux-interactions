import { createSelector } from 'reselect';

import { postSelector } from './postSelector';
import { formStateSelector } from './storeDataSelector';

export const isSubmittableSelector = createSelector(
  postSelector,
  formStateSelector,
  (post, formState) =>
    formState.get('title')
    && post.get('title') !== formState.get('title'),
);
