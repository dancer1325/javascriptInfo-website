# The modern mode, "use strict"

* History
  * JS -- evolved -- WITHOUT compatibility issues
    * === backward compatibility
  * ≥  ES5
    * added new features
    * modified some existing ones
      * 👀→ by default, are off 👀
        * Reason: 🧠keep old code working 🧠
      * 👀`use strict` → enable these modifications 👀

## "use strict"

* `“use strict"` / `‘use strict’`
  * 👀 := directive / enable the modifications done | EXISTING JS features 👀
  * can be placed
    * | top of a script
      * → affect to the WHOLE script
      * 👀MOST common one 👀
      * _Example:_ [here](scriptUsingStrict.js)
    * | beginning of a function 
      * → affect to the function ONLY
      * _Example:_ [here](scriptStrictBeginingOfAFunction.js)
  * ⚠️NO directive to cancel it ⚠️
  * 💡if SOME rule NOT fulfilled -> throw errors | runtime 💡
  * [rules](https://www.youtube.com/watch?v=7e6ssF78Af4) 
    * use variable declaration keywords (`var`, `let`, `const`) | declare variables
    * ❌NOT possible to ❌
      * modify read-only attributes ❌
      * extend objects / restricted to be extended
      * duplicate parameters
        * _Example:_ function's arguments
      * declare octal numbers randomly 
        * == require the prefix `0o` or `0O`
      * apply `delete` | elements / can NOT be deleted (function, variable, window)
      * declare a variable / uses keyword names (`eval`, `arguments`, ...)
      * use `with`
      * declare a reference to a function -- `this` --
    * _Examples:_ [here](scriptUsingStrict.js)

## Browser console

* see [developer console](/JS%20Language/01-getting-started/4-devtools)
* ❌by default, NOT `use strict` ❌
* if you want to use it -> 
  * declare MULTIPLE lines
    * _Example:_ 
  
      ```js
      'use strict'; <Shift+Enter for a newline>
      //  ...your code
      <Enter to run>
      ```
  * | old browsers,
    * put it | wrapper
      * _Example:_ 
      
        ```js
        (function() {
          'use strict';
  
          // ...your code here...
        })()
        ```

## Should we "use strict"?

* Modern JS
  * 👀supports classes and modules -> AUTOMATICALLY use `use strict` 👀
    * == NO need to declare it 
