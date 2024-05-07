# [Object references and copying](https://javascript.info/object-copy)

## How to run locally?
* Open 'index.html' in your browser
  * Error got through Node, since `structuredClone` not available for NodeJs

## Content
* Objects are stored and copied by reference
* Clone and merge an object
  * iterating through all the properties
  * `Object.assign(destinationInstanceObject, … sources)`
  * `{… sourceInstanceObject}`
  * `structuredClone(instanceObject)`
    * just available in browsers!!!
