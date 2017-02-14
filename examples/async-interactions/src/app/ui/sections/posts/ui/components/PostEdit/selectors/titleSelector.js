import { createSelector } from 'reselect';

import { postSelector } from './postSelector';
import { formStateSelector } from './storeDataSelector';

export const titleSelector = createSelector(
  postSelector,
  formStateSelector,
  (post, formState) => (
    formState.get('title') !== null
    ? formState.get('title')
    : post.get('title')
  ),
);
