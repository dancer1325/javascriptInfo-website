# Dynamic imports

* [PREVIOUS `export` & `import`](../02-import-export)
  * == 👀"static" 👀
    * ❌NOT possible to ❌
      * generate dynamically ANY parameters of `import`
      * import conditionally or | run-time
    * _Example:_ [here](staticLimitations.js)
    * Reason: 🧠 the goal -- is to provide a -- backbone for the code structure 🧠 

## `import()` expression

* `import(module)`
  * how does it work?
    * loads the module
    * 👀returns a promise / -- resolves into a -- module object / contains ALL its exports 👀
  * uses
    * | ANY place in the code
    * | regular scripts
  * ❌ALTHOUGH `()`, NOT a function call ❌
  * _Example:_ [here](say.view)
