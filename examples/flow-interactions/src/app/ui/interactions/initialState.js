/* @flow */

import { Record } from 'immutable';

type StoreShape = {|
  postId: number | null,
  titleInput: string | null,
  isProcessing: boolean,
|};

export type StoreState = Record<StoreShape>;

const initialState: StoreShape = {
  postId: null,
  titleInput: null,
  isProcessing: false,
};

const State = Record(initialState);

export default new State();
