# Variables

## A variable

* variable
  * := named storage for data
  * ways to declare
    * `var`
      * old-school way
    * `let`
    * `const`
      * unchangeable value
      * ⚠️if the value is known prior to execution → recommendation to use capital letters ⚠️
        * 👀 === hardcoded values == alias👀
        * 👀 ≠ unchangeable values / -- depend on -- external service 👀
      * uses
        * variable will NOT be changed
  * 's value -- can be copied to -- ANOTHER variable
  * ⚠️if you declare 2 times SAME variable -> throws an error ⚠️
  * if you do (_Example:_ [here](scriptUseStrict.js))
    * 👀NOT force `use strict` -> you can declare a variable WITHOUT a keyword 👀
    * ❌force `use strict` -> you can NOT declare a variable WITHOUT a keyword ❌
  * _Example:_ [here](script.js)  

## A real-life analogy

* "variable" == "box" for data / 
  * uniquely-named sticker
  * values | them

    ![](variable.svg)
    * can be changed

      ![](variable-change.svg)

## Variable naming [#variable-naming]

* Variable naming
  * restrictions
    * could contain
      * letters,
      * digits
      * `$`
        * regular symbol / NO special meaning
      * `_`
        * regular symbol / NO special meaning
    * FIRST character != digit
    * NOT use [reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
      * _Example:_ `let`, `class`, `return`, `function`
  * recommendations
    * camelCase
    * latin letters
      * ALTHOUGH ANY language letters are ALLOWED
    * descriptive
  * case-sensitive
