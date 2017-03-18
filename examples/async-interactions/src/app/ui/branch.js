import { createBranch } from 'redux-tree';

import postsBranch from './sections/posts/branch';
import videosBranch from './sections/videos/branch';
import worksBranch from './sections/works/branch';

export default createBranch({
  posts: postsBranch,
  videos: videosBranch,
  works: worksBranch,
});
