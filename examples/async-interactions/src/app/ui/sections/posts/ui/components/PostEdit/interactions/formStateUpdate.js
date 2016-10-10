const FORM_STATE_UPDATE = 'POST_EDIT # FORM_STATE_UPDATE';

// Action creator
export const updateFormState = title => ({
  type: FORM_STATE_UPDATE,
  title,
});

// Reducer handler
export const onFormStateUpdate = {
  [FORM_STATE_UPDATE]:
    (state, { title }) =>
      state.mergeIn(['formState'], { title }),
};
