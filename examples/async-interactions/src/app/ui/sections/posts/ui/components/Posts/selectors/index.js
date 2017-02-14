import { createStructuredSelector } from 'reselect';

import postsSelector from './postsSelector';

export default createStructuredSelector({
  posts: postsSelector,
});
