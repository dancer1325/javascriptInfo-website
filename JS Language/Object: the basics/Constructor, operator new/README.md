# [Constructor, operator "new"](https://javascript.info/constructor-new)

## How to run locally?
* `node script.js`

## Content
* Ways to create an object
  * literal object -- `{ ...}` -- 
  * `new ConstructorFunction(){....}`
    * constructor function
    * function could be
      * function declaration
      * function expression
    * accepts `return`
    * if there are no arguments -> `()` can be omitted
* `new.target`
  * check if a function was invoked with `new`
* regular functions
  * functions without using `new`
  * if you add in its logic a constructor function → they can be used to create an instance object

## Notes
* arrow functions can NOT be used
