// Action type
const DECREMENT = 'DECREMENT';

// Action creator
export const decrement = () => ({ type: DECREMENT });

// Action handler
export const onDecrement = { [DECREMENT]: state => state - 1 };
