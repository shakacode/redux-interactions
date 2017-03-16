import { createSelector } from 'reselect';

import { postsSelector } from '../../../../../../../entities/posts/selectors';

export default createSelector(
  postsSelector,
  posts => posts.toJS(),
);
