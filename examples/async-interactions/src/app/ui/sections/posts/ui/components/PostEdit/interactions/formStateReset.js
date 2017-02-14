import initialState from './initialState';

const FORM_STATE_RESET = 'POST_EDIT # FORM_STATE_RESET';

// Action creator
export const resetFormState = () => ({ type: FORM_STATE_RESET });

// Reducer handler
export const onFormStateReset = {
  [FORM_STATE_RESET]: () => initialState,
};
