/* @flow */

import { Map, OrderedSet, Record } from 'immutable';
import { normalize } from 'normalizr';

import { posts } from '../../../api/data';

import * as schemas from '../schemas';
import { normalizeEntities } from '../../../utils';


const State = Record({
  index: new OrderedSet(),
  entities: new Map(),
});

const Entity = Record({
  id: null,
  title: null,
});

// I'm cheatting here as in the real world data must be fetched or rehydrated,
// but I'm normalizing and putting it in the store right in the initial state.
// So in the real world it'd be just:
// export default new State();

const { result, entities } = normalize(posts, schemas.posts);

export default new State({
  index: new OrderedSet(result),
  entities: normalizeEntities(entities.posts, Entity),
});
