# Introduction to browser events
[Introduction to browser events](https://javascript.info/introduction-browser-events)

## Event handlers
* ways to assign
  * HTML attribute
  * DOM property
    * 👀 You can get access to the event 👀
  * `.addEventListener(eventName, handler, [options])`
    * By default, it will listen the event forever
    * `handler: Function | EventListener`
      * `interface EventListener` with
        * `handleEvent(Event event): undefined`
          * 👀 You can get access to the event 👀
    * `[options]`
      * Optional 
      * `once: true` -> after 1@ execution, listener will be removed
    * `.removeEventListener()` with the same (!!) arguments -> event handler is removed
    * Several event handlers / event can be added
    * There are certain events, which just accepts `addEventListener()`

## this

## Possible mistakes
* If it's DOM property event handler assignment -> function declaration, not function execution
* If it's HTML attribute event handler assignment -> function declaration, not function execution
* Event handlers can not be used via `setAttribute()`
* DOM property event handler assignment is case-sensitive

## Event object
* can be passed to event handler's argument
* have certain global properties and other depends on event type

## Tasks
* Task1
* Task2
* Task3
* Task4
* Task5
* Task6
* Task7