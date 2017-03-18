/* @flow */

import { Map, Record } from 'immutable';

export const normalizeEntities = <E: Object>(
  entities: { [id: string]: E },
  Entity: Class<Record<E>>,
): Map<number, Record<E>> => (
  Object
    .keys(entities)
    .reduce(
      (dict, id) => dict.set(parseInt(id, 10), new Entity(entities[id])),
      new Map(),
    )
);
