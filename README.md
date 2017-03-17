# redux-interactions

Thinking of UI in terms of interactions makes life easier.

## How it works
Here is the simple form:      

```js
const Form = ({ value, updateFormState, submitForm }) => (
  <form
    onSubmit={event => {
      event.preventDefault();
      submitForm();
    }}
  >
    <input
      type="text"
      value={value}
      onChange={event => updateFormState(event.target.value)}
    />
    <button>
      Save
    </button>
  </form>
);
```

User can interact with this form in 2 ways:

* update form state
* submit the form

In the classic structure of Redux app, logic of these interactions is split at least between 2 modules: `actions.js` & `reducer.js`. And it makes harder to work on each interaction because you switch back and forth between those all the time.

This approach proposes to treat interactions as atomic modules instead.

```
|- components/            # representation
  |-- index.jsx
  |-- index.css
|- interactions/          # modules w/ interactions
  |-- formStateUpdate.js
  |-- formSubmit.js
|- selectors/             # data selectors
  |-- ...
|- state.js               # state definition
|- actions.js             # list of action creators
|- reducer.js             # list of action handlers
|- index.js               # container w/ `connect`
```

Everything about the interaction is declared in the `interaction` module:

```js
// --- Action Type
const FORM_STATE_UPDATE = 'FORM_STATE_UPDATE';

// --- Action creator
export const updateFormState = nextValue => ({
  type: FORM_STATE_UPDATE,
  value: nextValue,
});

// --- Action handler
export const onFormStateUpdate = {
  [FORM_STATE_UPDATE]:
    (state, { value }) =>
      state.mergeIn(['formState'], { value }),
};
```

All the changes in the app, caused by the interaction, are gathered in one place: easy to find, easy to reason about, easy to change, move or remove.

Reducer module doesn’t own any logic anymore, this is just an index of interactions:

```js
import { onFormStateUpdate } from './interactions/formStateUpdate';
import { onFormSubmit } from './interactions/formSubmit';

export default createReducer(initialState, {
  ...onFormStateUpdate,
  ...onFormSubmit,
});
```

> Spot [`createReducer` helper](./examples/basic-interactions/src/utils/index.js) from [Redux's recipes](http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-reducers). It replaces `switch` statements in reducers. It doesn't have anything w/ `switch` statement itself. The reason is that it makes possible accurate typing of arguments passed from action creator to action handler(s).

Same for the action creators:

```js
import { updateFormState } from './interactions/formStateUpdate';
import { submitForm } from './interactions/formSubmit';

export default {
  updateFormState,
  submitForm,
};
```

## Examples

> NOTE: Advanced examples are using [`redux-tree`](https://github.com/shakacode/redux-tree) now. Docs will be updated shortly.

* **basic-interactions** [ [live](http://redux-basic-interactions.surge.sh) &middot; [source](./examples/basic-interactions) ]<br>
Simple counter reimplemented with `interactions`.
* **async-interactions** [ [live](http://redux-async-interactions.surge.sh) &middot; [source](./examples/async-interactions) ]<br>
The real world app example.
* **flow-interactions** [ [live](http://redux-flow-interactions.surge.sh) &middot; [source](./examples/flow-interactions) ]<br>
Redux app typed w/ `flow`.
* **saga-interactions** [ _coming soon_ ]<br>
Works great for sagas too!
