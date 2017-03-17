/* @flow */

import type { State } from './tree';

export type Action = { type: $Subtype<string> };
export type Dispatch = (action: Action) => Action | (thunk: Thunk) => void;
export type GetState = () => State;
export type Thunk = (dispatch: Dispatch, getState: GetState) => void;
export type ActionHandler<S, A> = (state: S, action: A) => S;
export type ActionHandlerAtLeaf<S, A> = {|
  leaf: Array<string>,
  reduce: ActionHandler<S, A>,
|};
