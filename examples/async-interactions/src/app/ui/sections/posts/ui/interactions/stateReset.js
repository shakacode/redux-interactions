import initialState from './initialState';

const STATE_RESET = 'POSTS_FETCH # STATE_RESET';

// Action creator
export const resetState = () => ({ type: STATE_RESET });

// Reducer handler
export const onStateReset = {
  [STATE_RESET]: () => initialState,
};
