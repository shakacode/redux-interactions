import state from '../state';

const STATE_RESET = 'POSTS_FETCH # STATE_RESET';

// Action creator
export const resetState = () => ({ type: STATE_RESET });

// Action handler
export const onStateReset = {
  [STATE_RESET]: () => state,
};
