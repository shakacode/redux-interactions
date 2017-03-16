import { Map } from 'immutable';

export const normalizeEntities = (entities, Entity) => (
  Object
    .keys(entities)
    .reduce(
      (dict, id) => dict.set(parseInt(id, 10), new Entity(entities[id])),
      new Map(),
    )
);
