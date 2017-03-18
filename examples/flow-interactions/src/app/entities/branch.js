/* @flow */

import { Record } from 'immutable';
import { createBranch } from 'redux-tree';

import postsLeaf from './posts/leaf';
import type { LeafState as PostsLeafState } from './posts/state';

export type EntitiesBranch = Record<{|
  posts: PostsLeafState,
|}>;

export default createBranch({
  posts: postsLeaf,
});
