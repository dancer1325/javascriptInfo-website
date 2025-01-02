
# Modules, introduction

* module := file(s) / 👀fulfil a specific purpose 👀 
  * file(s) == [1! class, multiple files] 👀
  * 1 module == 1 script
    * see [Core module features](#core-module-features)
  * uses
    * | application is getting bigger
      * → split it into modules

* History
  * | beginning 
    * NO exist
      * Reason: 🧠 Scripts were small and simple 🧠
  * 👀FIRST module definitions 👀
    * [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition)
    * [CommonJS](https://wiki.commonjs.org/wiki/Modules/1.1)
    * [UMD](https://github.com/umdjs/umd)
  * | 2015
    * [ECMAScript](https://nodejs.org/api/esm.html#modules-ecmascript-modules)
      * 👀Current one 👀
      * supported by
        * [browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#browser_compatibility)
        * NodeJs

## What is a module?

* module1 ← can be loaded → module2
  * `export`
    * := directive /
      * allows
        * 👀using variables & functions outside the current module 👀
  * `import`
    * := directive /
      * allows
        * 👀using variables & functions from other modules 👀
  * PREVIOUS directives work
    * ⚠️ONLY -- via -- HTTP ⚠️
      * -> if you want to test modules, use a local web-server
        * [static-server](https://www.npmjs.com/package/static-server#getting-started)
        * your IDE's "live server" capability
          * _Example:_ [VSC's Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    * ❌NOT -- via -- locally ❌
      * locally == `file://PathInYourComputer` | browser

* _Example:_ [here](importThroughAnotherFile)
  * open index.html | browser

## Core module features

* VALID | 
  * browser JS or
  * server-side JS

### ALWAYS "use strict"

* see ["use strict"](/JS%20Language/JS%20Fundamentals/Modern%20mode,%20%22use%20strict%22)

* _Example:_ if you assign to an undeclared variable -> will give an error

    ```html run
    <script type="module">
      a = 5; // error
    </script>
    ```

### Module-level scope

* ⚠️OWN top-level scope / EACH module ⚠️
  * == ❌module’s top-level variables & functions — are NOT seen — | OTHER modules ❌
    * == top-level module's uses
      * initialization
        * Reason: 🧠 [1! evaluation](#module-code-is-evaluated-only--first-time-imported) 🧠
      * creation of module-specific internal data structures
  * | JS level
    * == DIFFERENT ".js"
    * → 👀you need to use `export` & `import` 👀
    * _Examples:_
      * [here failing](scopes.view)
      * [here working](scopes-working.view)
  * | HTML
    * == DIFFERENT `<script type="module">`
    * _Example:_ [here](module-level%20scope)

### module code is evaluated ONLY | first time, imported

* ⚠️module code is evaluated ONLY 1! | first time, it’s imported ⚠️
  * == 👀if the SAME module is imported | multiple OTHER modules → executed 1! 👀
    * _Example:_[here](moduleCodeIsEvaluated1Time)
    * -> exports are given | ALL further imports
      * _Example:_ [here](sameExportGivenToAllImporters)
      * if you need SOMETHING / callable MULTIPLE times -> export it as a function, like we did with `sayHi` above.
  * → allow us
    * 👀 split module's final functionality -- between -- SEVERAL modules 👀
      * use case == pattern
        * module / provides configuration + modules / feeds the configuration + modules / consume them
      * _Example:_ [Here](configureModulesViaSeveral)

### `import.meta`

* == information -- about the -- CURRENT module /
  * -- depends on the -- environment (.js / .mjs or .html)
    * | browser (== .html)
      * == URL of the script

### "this" | top-level modules, is undefined 

* _Example:_ [here](thisTopLevelModuleIsUndefined)

## Browser-specific features

* TODO:
There are also several browser-specific differences of scripts with `type="module"` compared to regular ones.

You may want to skip this section for now if you're reading for the first time, or if you don't use JavaScript in a browser.

### Module scripts are deferred

Module scripts are *always* deferred, same effect as `defer` attribute (described in the chapter [](info:script-async-defer)), for both external and inline scripts.

In other words:
- downloading external module scripts `<script type="module" src="...">` doesn't block HTML processing, they load in parallel with other resources.
- module scripts wait until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run.
- relative order of scripts is maintained: scripts that go first in the document, execute first.

As a side effect, module scripts always "see" the fully loaded HTML-page, including HTML elements below them.

For instance:

```html run
<script type="module">
*!*
  alert(typeof button); // object: the script can 'see' the button below
*/!*
  // as modules are deferred, the script runs after the whole page is loaded
</script>

Compare to regular script below:

<script>
*!*
  alert(typeof button); // button is undefined, the script can't see elements below
*/!*
  // regular scripts run immediately, before the rest of the page is processed
</script>

<button id="button">Button</button>
```

Please note: the second script actually runs before the first! So we'll see `undefined` first, and then `object`.

That's because modules are deferred, so we wait for the document to be processed. The regular script runs immediately, so we see its output first.

When using modules, we should be aware that the HTML page shows up as it loads, and JavaScript modules run after that, so the user may see the page before the JavaScript application is ready. Some functionality may not work yet. We should put "loading indicators", or otherwise ensure that the visitor won't be confused by that.

### Async works on inline scripts

For non-module scripts, the `async` attribute only works on external scripts. Async scripts run immediately when ready, independently of other scripts or the HTML document.

For module scripts, it works on inline scripts as well.

For example, the inline script below has `async`, so it doesn't wait for anything.

It performs the import (fetches `./analytics.js`) and runs when ready, even if the HTML document is not finished yet, or if other scripts are still pending.

That's good for functionality that doesn't depend on anything, like counters, ads, document-level event listeners.

```html
<!-- all dependencies are fetched (analytics.js), and the script runs -->
<!-- doesn't wait for the document or other <script> tags -->
<script *!*async*/!* type="module">
  import {counter} from './analytics.js';

  counter.count();
</script>
```

### External scripts

External scripts that have `type="module"` are different in two aspects:

1. External scripts with the same `src` run only once:
    ```html
    <!-- the script my.js is fetched and executed only once -->
    <script type="module" src="my.js"></script>
    <script type="module" src="my.js"></script>
    ```

2. External scripts that are fetched from another origin (e.g. another site) require [CORS](mdn:Web/HTTP/CORS) headers, as described in the chapter <info:fetch-crossorigin>. In other words, if a module script is fetched from another origin, the remote server must supply a header `Access-Control-Allow-Origin` allowing the fetch.
    ```html
    <!-- another-site.com must supply Access-Control-Allow-Origin -->
    <!-- otherwise, the script won't execute -->
    <script type="module" src="*!*http://another-site.com/their.js*/!*"></script>
    ```

    That ensures better security by default.

### No "bare" modules allowed

In the browser, `import` must get either a relative or absolute URL. Modules without any path are called "bare" modules. Such modules are not allowed in `import`.

For instance, this `import` is invalid:
```js
import {sayHi} from 'sayHi'; // Error, "bare" module
// the module must have a path, e.g. './sayHi.js' or wherever the module is
```

Certain environments, like Node.js or bundle tools allow bare modules, without any path, as they have their own ways for finding modules and hooks to fine-tune them. But browsers do not support bare modules yet.

### Compatibility, "nomodule"

Old browsers do not understand `type="module"`. Scripts of an unknown type are just ignored. For them, it's possible to provide a fallback using the `nomodule` attribute:

```html run
<script type="module">
  alert("Runs in modern browsers");
</script>

<script nomodule>
  alert("Modern browsers know both type=module and nomodule, so skip this")
  alert("Old browsers ignore script with unknown type=module, but execute this.");
</script>
```

## Build tools

In real-life, browser modules are rarely used in their "raw" form. Usually, we bundle them together with a special tool such as [Webpack](https://webpack.js.org/) and deploy to the production server.

One of the benefits of using bundlers -- they give more control over how modules are resolved, allowing bare modules and much more, like CSS/HTML modules.

Build tools do the following:

1. Take a "main" module, the one intended to be put in `<script type="module">` in HTML.
2. Analyze its dependencies: imports and then imports of imports etc.
3. Build a single file with all modules (or multiple files, that's tunable), replacing native `import` calls with bundler functions, so that it works. "Special" module types like HTML/CSS modules are also supported.
4. In the process, other transformations and optimizations may be applied:
    - Unreachable code removed.
    - Unused exports removed ("tree-shaking").
    - Development-specific statements like `console` and `debugger` removed.
    - Modern, bleeding-edge JavaScript syntax may be transformed to older one with similar functionality using [Babel](https://babeljs.io/).
    - The resulting file is minified (spaces removed, variables replaced with shorter names, etc).

If we use bundle tools, then as scripts are bundled together into a single file (or few files), `import/export` statements inside those scripts are replaced by special bundler functions. So the resulting "bundled" script does not contain any `import/export`, it doesn't require `type="module"`, and we can put it into a regular script:

```html
<!-- Assuming we got bundle.js from a tool like Webpack -->
<script src="bundle.js"></script>
```

That said, native modules are also usable. So we won't be using Webpack here: you can configure it later.

## Summary

To summarize, the core concepts are:

1. A module is a file. To make `import/export` work, browsers need `<script type="module">`. Modules have several differences:
    - Deferred by default.
    - Async works on inline scripts.
    - To load external scripts from another origin (domain/protocol/port), CORS headers are needed.
    - Duplicate external scripts are ignored.
2. Modules have their own, local top-level scope and interchange functionality via `import/export`.
3. Modules always `use strict`.
4. Module code is executed only once. Exports are created once and shared between importers.

When we use modules, each module implements the functionality and exports it. Then we use `import` to directly import it where it's needed. The browser loads and evaluates the scripts automatically.

In production, people often use bundlers such as [Webpack](https://webpack.js.org) to bundle modules together for performance and other reasons.

In the next chapter we'll see more examples of modules, and how things can be exported/imported.
