/* @flow */

import { Record } from 'immutable';
import { createTree } from 'redux-tree';

import entitiesBranch from './entities/branch';
import postFormLeaf from './ui/leaf';

import type { EntitiesBranch } from './entities/branch';
import type { LeafState as PostFormLeafState } from './ui/state';

export type State = Record<{|
  entities: EntitiesBranch,
  postForm: PostFormLeafState,
|}>;

export default createTree({
  entities: entitiesBranch,
  postForm: postFormLeaf,
});
