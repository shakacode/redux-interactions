import { Map, OrderedSet, Record } from 'immutable';

const State = Record({
  index: new OrderedSet(),
  entities: new Map(),
});

export default new State();
