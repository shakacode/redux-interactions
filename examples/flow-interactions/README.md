# flow-interactions

Example of flow typed redux app.

## Limitations

* Can't use exact object type with computed properties. It leaves a chance to mess up with the action type key.

```js
const ACTION: 'ACTION' = 'ACTION';

// Exact object type doesn't work
type OnAction = {|
  [typeof ACTION]: Handler,
|};

const onAction: OnAction = {
  [ACTION]: state => state,
// ^
// computed property
};
```

* Immutable `Record` methods, that is inherited from `Map`, are not typed yet.

```js
type EntityShape = {| name: string | null |};
type EntityRecord = Record<EntityShape>;

const Entity = Record({ name: null });
const entity = new Entity();

// works
const nextEntity = entity.set('name', 'next name');   // fine
const nextEntity = entity.set('badName', 'bad name'); // flow throws
//                            ^
//                            bad prop

// doesn't work
const nextEntity = entity.merge({ name: 'next name' });
//                        ^
//                        can't find method
```

* Immutable `Record` instance properties are also un-typed.

```js
const Entity = Record({ name: null });
const entity = new Entity({ name: 'name' });

entity.get('name') // fine
entity.name        // flow throws
```
