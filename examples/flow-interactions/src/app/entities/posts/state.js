/* @flow */

import { Map, OrderedSet, Record } from 'immutable';

import type { PostsIndex, PostsMap } from './entity';

type LeafStateShape = {|
  index: PostsIndex,
  entities: PostsMap,
|};

export type LeafState = Record<LeafStateShape>;

const State = Record({
  index: new OrderedSet(),
  entities: new Map(),
});

// export default new State();


// I'm cheatting a bit as in the real world data must be fetched or rehydrated,
// but I'm normalizing and putting it in the store right here.
// See `async-interactions` example for details.
import { normalize } from 'normalizr';

import * as schema from '../schema';
import { normalizeEntities } from '../../../utils';

import { posts } from '../../../api/data';
import { Post } from './entity';

const { result, entities } = normalize(posts, schema.posts);

export default new State({
  index: new OrderedSet(result),
  entities: normalizeEntities(entities.posts, Post),
});
