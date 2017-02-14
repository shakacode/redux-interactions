// Action type
const DECREMENT = 'DECREMENT';

// Action creator
export const decrement = () => ({ type: DECREMENT });

// Reducer handler
export const onDecrement = { [DECREMENT]: state => state - 1 };
