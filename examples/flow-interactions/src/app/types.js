/* @flow */

import type { DataStores } from './data/types';
import type { StoreState as PostFormStoreState } from './ui/state';

export type State = {|
  data: DataStores,
  postFormStore: PostFormStoreState,
|};

export type Action = { type: $Subtype<string> };
export type Dispatch = (action: Action) => Action | (thunk: Thunk) => void;
export type GetState = () => State;
export type Thunk = (dispatch: Dispatch, getState: GetState) => void;
export type ActionHandler<S, A> = (state: S, action: A) => S;
export type ActionHandlers<S, A> = { [type: string]: ActionHandler<S, A> };
