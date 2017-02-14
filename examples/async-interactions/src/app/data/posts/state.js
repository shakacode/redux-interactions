import { Map, OrderedSet, Record } from 'immutable';

export const Post = Record({
  id: null,
  title: null,
});

const State = Record({
  index: new OrderedSet(),
  entities: new Map(),
});

export default new State();
