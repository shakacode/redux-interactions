/* @flow */

import { Map, OrderedSet, Record } from 'immutable';
import { normalize } from 'normalizr';

import { posts } from '../../../api/data';

import * as schema from '../schema';
import { normalizeEntities } from '../../../utils';


const Post = Record({
  id: null,
  title: null,
});

const State = Record({
  index: new OrderedSet(),
  entities: new Map(),
});


// I'm cheatting a bit as in the real world data must be fetched or rehydrated,
// but I'm normalizing and putting it in the store right here.
// See `async-interactions` example for details.

const { result, entities } = normalize(posts, schema.posts);

export default new State({
  index: new OrderedSet(result),
  entities: normalizeEntities(entities.posts, Post),
});
