# redux-interactions

Thinking of UI in terms of interactions makes life easier.


## What and Why

> This is not a library, but a pattern.

There are two ways of thinking of about UI: in terms of **state** or in terms of **interactions**.

### State-based model
This pattern is common in the Redux community. In this style of thinking, the building blocks of the app are **reducers**. Each reducer is tightly coupled to a specific part of the state. It decides how to respond to actions from the outside. It has full control over its part of the state, and that’s its only concern.

The main take away here is that **state is smart**.


### Interactions-based model
In this model, application state is represented as an **inert tree**.

> **Check out [`redux-tree`](https://github.com/shakacode/redux-tree) as it's a big part of interactions pattern.**

When a user interacts with the UI, the application changes its state in response. As opposed to a reducers-based model, state is a passive data container here. And **interactions** are the ones in charge.

```
state:
  entities:
    posts: { index, entities }
    comments: { entities }
  ui:
    postsList: { processingPosts }
    ...
```
_State tree_

Let’s say a user manages his posts and removes one of them by clicking the “Delete” button. What’s happening under the hood? The state of this UI part is stored in the `state.ui.postsList` leaf. Clicking on the button, a user triggers an action creator and the app starts a request to the server. In response to this action, `postId` is added to the `processingPosts` set to show the spinner in the UI. It requires a change of the single `ui.postsList` leaf. Let’s describe it in the interaction module:

```js
// Action creator: returns request action
const requestAction = postId => ({
  type: 'POST_DELETE_REQUESTED',
  postId,
});

// Action handler: reduces the state of the single leaf
const onRequest = {
  POST_DELETE_REQUESTED:
    (state, { postId }) =>
      state.update('processingPosts', postIds => postIds.add(postId)),
};
```

When a server responds with a success:
* `postId` must be removed from the `processingPosts`
* `post` entity must be removed from the `entities.posts` leaf. 

This action entails changing 2 different leaves:

```js
// Action creator: returns success action
const successAction = postId => ({
  type: 'POST_DELETE_SUCCEEDED',
  postId,
});

// Action handlers: passing array of the reducers for this action type
//                  to apply sequence of the changes to the state tree
const onSuccess = {
  POST_DELETE_SUCCEEDED: [
    // 1. hide spinner
    (state, { postId }) =>
      state.update('processingPosts', postIds => postIds.delete(postId)),

    // 2. remove post entity
    {
      leaf: ['entities', 'posts'], // <= keypath to the leaf of the state
      reduce:
        (postsEntitiesState, { postId }) =>
          postsEntitiesState
            .updateIn(['index'], index => index.delete(postId))
            .updateIn(['entities'], entities => entities.delete(postId)),
    },
  ],
};
```

Notice how easy it is to follow what’s going on here because the logic of a single interaction is contained entirely in a single module. Try it and you will see how easy it is writing code like this.

The key point is that an interaction decides which part(s) of the state will be updated in response to the action.


## Files structure
This approach proposes to represent **interactions as a modules**.

```
|- components/            # representation
  |-- index.js
  |-- index.css
|- interactions/          # modules w/ interactions
  |-- postEdit.js
  |-- postDelete.js
|- selectors/             # data selectors
  |-- ...
|- index.js               # container w/ `connect`
|- actions.js             # list of action creators
|- leaf.js                # leaf creator (see redux-tree)
|- state.js               # state definition
```

Everything about the interaction is declared in the `interaction` module. Once interaction is written, connect it to the store using [`redux-tree`](https://github.com/shakacode/redux-tree) and you're all set.

Main wins here:

* **Changing things is easy**<br>
All the changes in the app caused by the interaction are gathered in one place that’s easy to find, easy to reason about, and easy to change, move or remove. In each case, you’re dealing with files and folders dedicated to a given interaction instead of chunks of code scattered around disparate actions and reducer modules.
* **Better focus**<br>
When you’re working on an interaction, you’re focused only on code related to an interaction. There aren’t any distractions from unrelated code.
* **Stronger typings**<br>
With `redux-tree` you get 1-to-1 mapping between action creator and action handler. It means you can strictly type an action that you dispatch via AC and this is exactly what you receive in AH. See [flow example](./examples/flow-interactions).


## Examples
* **basic-interactions** [ [live](http://redux-basic-interactions.surge.sh) &middot; [source](./examples/basic-interactions) ]<br>
Simple counter reimplemented with `interactions`.
* **async-interactions** [ [live](http://redux-async-interactions.surge.sh) &middot; [source](./examples/async-interactions) ]<br>
The real world app example.
* **flow-interactions** [ [live](http://redux-flow-interactions.surge.sh) &middot; [source](./examples/flow-interactions) ]<br>
Redux app typed w/ `flow`.
