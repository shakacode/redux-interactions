import { fromJS, Map, OrderedSet } from 'immutable';
import { normalize as __normalize, arrayOf as __arrayOf } from 'normalizr';


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


export const normalize = (...args) => {
  const { result, entities } = __normalize(...args);

  return {
    result: new OrderedSet([].concat(result)),
    entities: (
      Object
        .keys(entities)
        .reduce((reduction, entityType) => ({
          ...reduction,
          [entityType]: (
            entities[entityType]
            ? fromJS(entities[entityType]).mapKeys(id => parseInt(id, 10))
            : new Map()
          ),
        }), {})
    ),
  };
}

export const arrayOf = __arrayOf;
