## Tradeoffs

* Requires some manual work to import `interaction` parts into appropriate places.
* Limitation: in case of code-splitting using  `import()` / `System.import` / `require.ensure` — don't import `interactions` from different chunks. Otherwise it'll pull different chunk into the bundle. In such cases — re-compose the things or just use classic way of reducer composition.
