- When we say functions are "first class", we mean they are just like everyone else... so in other words a normal class.
- We can treat function like any other data type and there is nothing particularly special about them
- Because functions are callable in JavaScript

Why favor First class??
---------------------
- it's easy to add layers of indirection that provide no added value and only increase the amount of redundant code to maintain and search through
- Avoid needless wrapped functions
- Besides the removal of unnecessary functions, we must name and reference arguments. Names are a bit of an issue, you see. We have potential misnomers - especially as the codebase ages and requirements change.