# flow-interactions

Doesn't work

1. Exact object type with computed properties:

```js
const ACTION: 'ACTION' = 'ACTION';

// Exact type doesn't work
type OnAction = {|
  [typeof ACTION]: Handler,
|};

const onAction: OnAction = {
  [ACTION]: state => state,
// ^
// computed property
};
```

2. Typings of Immutable `Record` methods, that is inherited from `Map`

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

3. Typings of Immutable `Record` instance properties

```js
const Entity = Record({ name: null });
const entity = new Entity({ name: 'name' });

entity.get('name') // fine
entity.name        // flow throws
```
