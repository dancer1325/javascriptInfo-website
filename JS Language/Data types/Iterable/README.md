# [Iterables](https://javascript.info/iterable)

## Content
* Iterable
  * := generalization of arrays which has `Symbol.iterator`
* `for..of`
  * Valid for any iterable
  * If you try to use in a non-iterable
    * -> you get an error
    * if you define `Symbol.iterator` property -> you can use it
* `string`
  * is an iterable
* Calling an iterator manually
  * instead of using `for..of`
* Array-likes
  * := objects which have
    * indexes
    * length
  * undefined
    * `pop`
    * `push`