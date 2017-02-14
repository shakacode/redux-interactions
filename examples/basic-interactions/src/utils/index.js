export const createReducer = (
  initialState,
  handlers,
) => (
  state = initialState,
  action,
) => (
  handlers.hasOwnProperty(action.type)
  ? handlers[action.type](state, action)
  : state
);
