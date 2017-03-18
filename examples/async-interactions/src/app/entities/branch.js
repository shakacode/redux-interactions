import { createBranch } from 'redux-tree';

import postsLeaf from './posts/leaf';
import videosLeaf from './videos/leaf';
import worksLeaf from './works/leaf';

export default createBranch({
  posts: postsLeaf,
  videos: videosLeaf,
  works: worksLeaf,
});
