import { Record } from 'immutable';

const FormState = Record({ title: null });

const State = Record({
  formState: new FormState(),
  isProcessing: false,
});

export default new State();
