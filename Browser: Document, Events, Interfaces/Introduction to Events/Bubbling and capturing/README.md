# Bubbling and capturing
[Bubbling and capturing](https://javascript.info/bubbling-and-capturing)

## Bubbling
* Almost all events bubble
* If you click on a child without event handler for that event, but some parent has got → parent’s event handler will be trigger
## event.target
* := most deeply element which caused the event
## Stopping bubbling
* `event.stopPropagation()`
  * stop the bubbling
  * take in consideration the overwritten of events
  * affect to a specific event, not to different events
* `event.stopImmediatePropagation()`
  * stop bubbling immediately 
    * === if there are several event handlers / event -> Just 1! will be executed 
## Capturing
* := Standard event's processing phase, from top -> element
* `.addEventListener(eventName, handler, {capture: true})`
  * Way to handle the capturing phase 
* During common user interactions, it's the 1@ phase to be executed
* Examples;
  * index.html
    * Capturing + Bubbling phase, for a specific element 
  * index2.html
    * Capturing + Bubbling phase, for all HTML elements here
    * Depending on the HTML element, that you click -> it will run through more or less elements
* `event.eventPhase: number`
  * event proccessing's phase
* `event.stopPropagation()` & `event.stopImmediatePropagation()` are also allowed here
