import { Map } from 'immutable';

export const createReducer = (
  initialState,
  handlers,
) => (
  state = initialState,
  action,
) => (
  handlers.hasOwnProperty(action.type)
  ? handlers[action.type](state, action)
  : state
);

export const normalizeEntities = (entities, Entity) => (
  Object
    .keys(entities)
    .reduce(
      (dict, id) => dict.set(parseInt(id, 10), new Entity(entities[id])),
      new Map(),
    )
);
