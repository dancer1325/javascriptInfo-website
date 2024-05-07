()# Custom elements
[Custom elements](https://javascript.info/custom-elements)

## Autonomous custom elements
* Required to define
  * `connectedCallback()`
  * `disconnectedCallback()`
  * `observedAttributes`
  * `attributeChangedCallback(name, oldValue, newValue)`
  * `adoptedCallback()`
* MyElement
  * is the skeleton
* TimeFormatted
  * is an example
  * check [ECMA402](https://tc39.es/ecma402/)
* RenderingOrder
  * impossible to get access innerHTML information
* RenderingOrderSetTimeOut
  * get access innerHTML information via setTimeOut
* RenderingOrderNestedSetTimeOut
  * get access information via setTimeOut, but with the problem of nested setTimeOut -> Not recommended
* RenderingOrderObservingAttributesAndListeningChanges
  * get access information passed into the custom element -- under construction --

## Customized built-in elements
* HelloButton
  * is an example
  * extends from the existing built-in HTMLButtonElement

## How to run locally?
* Open 'index.html' in the browser

## Ways to insert the script
* Add under `<script></script>`
* Add via `<script src="Path">`
