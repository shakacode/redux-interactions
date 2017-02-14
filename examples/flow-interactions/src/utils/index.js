/* @flow */

import { Map, Record } from 'immutable';

import type { ActionHandlers } from '../app/types';


export const createReducer = <S: *, A: *>(
  initialState: S,
  handlers: ActionHandlers<S, A>,
) => (
  state: S = initialState,
  action: A,
): S => (
  handlers.hasOwnProperty(action.type)
  ? handlers[action.type](state, action)
  : state
);


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
