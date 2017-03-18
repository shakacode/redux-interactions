/**
 * THIS FILE IS JUST A PLACEHOLDER
 * SEE `POSTS` FOLDER FOR COMPLETE EXAMPLE
 *
 */

import { Map, OrderedSet, Record } from 'immutable';

export const Work = Record({
  id: null,
  title: null,
});

const State = Record({
  index: new OrderedSet(),
  entities: new Map(),
});

export default new State();
