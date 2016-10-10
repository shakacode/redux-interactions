# redux-interactions

+1 take on structuring `react` & `redux` apps.


## Why?
Decoupling of action creators and associated reducers hurts. It hurts pretty much the same as `js/` & `css/` folders in the root of the project.

This approach proposes to group redux parts by usage context, rather than part's nature. Thus it's easier to work on and maintain the UI units.


## Benefits
* Maintainable structure of the action creators & associated reducers.
* 100% component centric UI development.
* Plays nice w/ _"single action -> multiple reducers reaction"_ case.
* Plays nice w/ `flow` (actually this was triggered by the `flow`).


## How it works
First things first. Terms:

* `UI unit` — element of user interface: like modal, or widget, or form.<br>
E.g `PostEditForm` or `Counter`.
* `interaction` — interactive feature of the `UI unit`, implementation of single user interaction with UI.<br>
E.g. form unit contains `formStateUpdate` interaction, `formSubmit` interaction etc. `Counter` unit holds `increment`/`decrement` interactions.

Here is layout for form:

```js
const Form = ({ value, updateFormState, submitForm }) => (
  <form onSubmit={event => {
    event.preventDefault();
    submitForm();
  }}>
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

To make it fully functional we successively implement tuples `[actionCreator(s), reducerHandler(s)]`: first for updates of the form state, then for validations, form submission etc. So it makes sense to group them in atomic modules, which I call `interactions`.

`Form/interactions/formStateUpdate.js`:

```js
// --- Action Type
const FORM_STATE_UPDATE = 'POST_EDIT # FORM_STATE_UPDATE';

// --- Action creator
export const updateFormState = (nextValue) => ({
  type: FORM_STATE_UPDATE,
  value: nextValue,
});

// --- Reducer handler
//     NOTE: It's not a reducer, but a part of it!
export const onFormStateUpdate = {
  [FORM_STATE_UPDATE]: (state, { value }) => state.mergeIn(['formState'], { value }),
};
```

**Everything** about the interaction is declared in the `interaction` module. In case if there is more than 1 reducer must respond to the action — the handler can be declared here and then imported in extraneous reducer. Reducers become just indexes of handlers and don't own handlers itself.

> **Example**<br>
> There are 2 reducers:
>
> * `postsReducer` — holds all post entities
> * `postEditReducer` — holds state of the edit form
>
> When form data is successfully saved, then on this action must respond both reducers: `postEditReducer` resets form state + `postsReducer` updates the entity.
>
> So it's more appropriate to have this logic declared in one place, rather than have it scattered among different reducers.
>
> [Example in async interaction](./examples/async-interactions/src/app/components/Sections/PostsSection/components/PostEdit/interactions/serverStateUpdate.js#L21-L35)  

When this `interaction` is done — import its parts into appropriate places.

`Form/actions.js`:

```js
import { updateFormState } from './interactions/formStateUpdate';
// other action creators...

export default {
  updateFormState,
  // other action creators...
};
```

`Form/reducer.js`:

```js
import { onFormStateUpdate } from './interactions/formStateUpdate';
// other reducer handlers...

export default createReducer(initialState, {
  ...onFormStateUpdate,
  // other reducer handlers...
});
```

1. Test in browser.
2. Works.
3. Nice!
4. Next interaction.

> #### `createReducer` helper
>
> As you might noticed I'm not using `switch` statement in reducers. Instead of it, I use [helper](./examples/basic-interactions/src/utils/index.js#L14) from [Redux's recipes](http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-reducers).
>
> It doesn't have anything w/ `switch` statement itself, I like `switch`. Main reason is that this makes possible to accurately type check w/ `flow` arguments passed from action creator to reducer handler(s). Also it's less verbose.

## Examples
* **basic-interactions** [ [live](http://redux-basic-interactions.surge.sh) &middot; [source](./examples/basic-interactions) ]<br>
Simple Counter reimplemented using `interactions`.
* **async-interactions** [ [live](http://redux-async-interactions.surge.sh) &middot; [source](./examples/async-interactions) ]<br>
Illustrates the real world app.
* **flow-interactions** [ [live](http://redux-flow-interactions.surge.sh) &middot; [source](./examples/flow-interactions) ]<br>
Type check redux app w/ `flow`.
* **saga-interactions** [ _coming soon_ ]<br>
Works great for sagas too!

## Trade-offs
See [TRADEOFFS.md](./TRADEOFFS.md)

## Related
As you can see in the [**async-interactions**](./examples/async-interactions/src/app/) example, all `containers` are injected directly in the UI tree (instead of being placed in the root `containers/` folder). It might cause long `import`s in some places, but in the big app root `containers/` causes long and messy containers list, where each container is out of context. So IMO long `import`s is lesser of two evils. Component-all-the-things!
