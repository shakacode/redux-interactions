// Action type
const INCREMENT = 'INCREMENT';

// Action creator
export const increment = () => ({ type: INCREMENT });

// Reducer handler
export const onIncrement = { [INCREMENT]: state => state + 1 };
