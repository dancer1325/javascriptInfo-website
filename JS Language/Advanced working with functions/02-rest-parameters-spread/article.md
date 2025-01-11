# Rest parameters and spread syntax

* goal
  * how to 
    * create functions / accept ARBITRARY number of arguments
      * _Example of built-in JS functions / ARBITRARY number of arguments:_ `Math.max(arg1, arg2, ..., argN)`, `Object.assign(dest, src1, ..., srcN)`  
    * pass arrays -- as -- functions' parameters

## Rest parameters `...`

* 👀INDEPENDENTLY how you define a function, it can be called -- with -- ANY number of arguments 👀
  * == NO error -- due to -- EXCESSIVE number of arguments
  * ⚠️ALTHOUGH, ONLY SOME will be used ⚠️

* `function functionName(argumentFirst, argumentSecond,...arrayNameContainingAllArguments){}`
  * ⚠️`...arrayNameContainingAllArguments` MUST be LAST argument ⚠️
    * ❌if you do NOT set -- as -- LAST argument -> error ❌

## The "arguments" variable

* `arguments`
  * 👀== special built-in array-like object / contains ALL arguments -- by -- their index 👀
    * cons
      * ⚠️array-like object != array ⚠️
        * -> ❌NOT array's methods can be used ❌
      * contains ALL arguments == if you set SPECIFIC arguments -> ALSO will be contained here
        * -> != `...`
  * history
    * exist BEFORE `...` was added | JS
  * 👀if we access the `arguments` object | arrow function -> it takes them -- from the -- outer "normal" function 👀
    * == arrow functions do NOT have THEIR OWN `arguments`
    * Reason: 🧠arrow functions do NOT have THEIR OWN `this` 🧠

## Spread syntax [#spread-syntax]

* `...`
  * 's
    * 👀syntax == [rest parameters](#rest-parameters-)' syntax 👀
    * ⚠️goal -- OPPOSITE to -- [rest parameters](#rest-parameters-)' goal ⚠️
      * 👀invoke a function vs declare a function 👀
  * use cases
    * invoke a function / accept ARBITRARY list of arguments & you have an array
    * merge arrays

* `invokeAFunction(specificArguments,...iterableContainingArbitraryArgumentsOne, ...iterableContainingArbitraryArgumentsSecond)`
  * `iterableContainingArbitraryArguments*` 
    * 👀pass SEVERAL is allowed 👀
    * ⚠️NOT required to pass -- as -- LAST argument ⚠️
    * iterable -- is converted to a -- list of arguments
    * see iterable
      * array
      * string
  * `specificArguments`
    * OPTIONAL

* it works -- via -- iterators
  * == 👀`for..of`'s behavior 👀

* vs `Array.from(obj)`
  * `...` works | iterables vs `Array.from(obj)` works | array-likes & iterables
    * if you want to turn something -- into an -- array -> use `Array.from`

## Copy an array/object

* TODO:
Remember when we talked about `Object.assign()` [in the past](info:object-copy#cloning-and-merging-object-assign)?

It is possible to do the same thing with the spread syntax.

```js run
let arr = [1, 2, 3];

*!*
let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array
*/!*

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3
```

Note that it is possible to do the same thing to make a copy of an object:

```js run
let obj = { a: 1, b: 2, c: 3 };

*!*
let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object
*/!*

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
```

This way of copying an object is much shorter than `let objCopy = Object.assign({}, obj)` or for an array `let arrCopy = Object.assign([], arr)` so we prefer to use it whenever we can.


## Summary

When we see `"..."` in the code, it is either rest parameters or the spread syntax.

There's an easy way to distinguish between them:

- When `...` is at the end of function parameters, it's "rest parameters" and gathers the rest of the list of arguments into an array.
- When `...` occurs in a function call or alike, it's called a "spread syntax" and expands an array into a list.

Use patterns:

- Rest parameters are used to create functions that accept any number of arguments.
- The spread syntax is used to pass an array to functions that normally require a list of many arguments.

Together they help to travel between a list and an array of parameters with ease.

All arguments of a function call are also available in "old-style" `arguments`: array-like iterable object.
