# [The modern mode, "use strict"](https://javascript.info/strict-mode)

`"use strict"` / `'use strict'`


## Notes
* Ways to insert it
  * top of the script
    * affect to the whole script
  * beginning of a function
* Allows
  * getting errors
    * previous to execute it
    * during run time
* Compare the differences of using or not
  * direct assignment without variable declaration
  * modify read-only attributes
  * extend restricted objects to be extended -- primitive variables can not be extended --
  * duplicated arguments in a function
  * octal numbers -- same behavior --
  * delete elements