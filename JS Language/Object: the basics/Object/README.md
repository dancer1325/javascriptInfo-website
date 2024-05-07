# [Object](https://javascript.info/object)


## How to run locally?
* Open in the browser 'index.html' or 
* `node script.js`

## Content
* Ways to create an instance object
  * `new Object()`
  * `{}`
* ways to get access to a property
  * `instanceObject.propertyKey`
  * `instanceObject[propertyKey]`
* propertyKey
  * computed properties
  * if propertyKey = propertyValue -> you only need to pass the propertyKey
    * if you pass as variable -> it must be declared previously
  * reserved keywords are available
    * _Example:_ `for`, `let`, `return`
  * if you pass neither string nor symbol -> string conversion done automatically
* `__proto__`
  * special reserved object's propertykey
* `for .. in`
* Ways to check if a property exist
  * `in`
  * compare with `undefined`
    * valid in all cases, except the propertyValue is `undefined`
* `delete instanceObject.propertyKey`
  * remove a property
* Ordering the properties