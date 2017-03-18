/* @flow */

import { Record } from 'immutable';

type StateShape = {|
  postId: number | null,
  titleInput: string | null,
  isProcessing: boolean,
|};

export type LeafState = Record<StateShape>;

const initialState: StateShape = {
  postId: null,
  titleInput: null,
  isProcessing: false,
};

const State = Record(initialState);

export default new State();
