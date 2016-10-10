## Tradeoffs

* Requires some manual work to import `interaction` parts into appropriate places.
* Limitation: if code-splitting w/  `import()` / `System.import` / `require.ensure` is used — don't import `interactions` from different chunks. Otherwise it'll pull different chunk into the bundle. In such cases — re-compose the things or just use classic way of reducer composition.
