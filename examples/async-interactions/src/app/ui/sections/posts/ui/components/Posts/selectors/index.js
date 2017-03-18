import { createStructuredSelector } from 'reselect';

import { getPostsList } from '../../../../../../../entities/posts/selectors';

export default createStructuredSelector({
  posts: getPostsList,
});
