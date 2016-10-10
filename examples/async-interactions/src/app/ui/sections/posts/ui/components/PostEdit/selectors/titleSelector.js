import { createSelector } from 'reselect';

import { postSelector } from './postSelector';
import { formStateSelector } from './storeDataSelector';

export const titleSelector = createSelector(
  postSelector,
  formStateSelector,
  (post, formState) => (
    typeof formState.get('title') !== 'undefined'
    ? formState.get('title')
    : post.get('title')
  ),
);
