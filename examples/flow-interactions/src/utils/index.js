/* @flow */

import { Map, Record } from 'immutable';

import type { ReducerHandlers } from '../app/types';


export const normalizeEntities = <E: Object>(
  entities: { [id: string]: E },
  Entity: Class<Record<E>>,
): Map<number, Record<E>> => (
  Object
    .keys(entities)
    .reduce(
      (collection, id) => collection.set(parseInt(id, 10), new Entity(entities[id])),
      new Map(),
    )
);


export const createReducer = <S: *, A: *>(
  initialState: S,
  handlers: ReducerHandlers<S, A>,
) => (
  state: S = initialState,
  action: A,
): S => (
  handlers.hasOwnProperty(action.type)
  ? handlers[action.type](state, action)
  : state
);
