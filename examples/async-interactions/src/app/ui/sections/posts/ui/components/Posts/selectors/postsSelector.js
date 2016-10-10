import { createSelector } from 'reselect';

import { postsSelector } from '../../../../../../../data/posts/selectors';

export default createSelector(
  postsSelector,
  posts => posts.toJS(),
);
