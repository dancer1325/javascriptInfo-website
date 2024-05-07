# Dispatching custom events
[Dispatching custom events](https://javascript.info/dispatch-events)

## Event constructor
* `new Event(type[, options])`
  * `options`
    * `bubbles?: boolean`
    * `cancelable?: boolean;`
    * `composed?: boolean;`

## dispatchEvent
* `element.dispatchEvent(event)`
* `event.isTrusted`
  * property to identify if the action was trigger by a real user o programmatically

## Bubbling
* `new Event(type, {bubbles: true})`
* Add event handlers to ancestors elements, to check how the event goes through them

## Adjust built-in events
* with
  * new type
  * existing type

## Custom events
* Ways to create them
  * `new Event(type[, options])`
  * `new CustomEvent(type[, customOptions])`
    * `customOptions extends options`
      * `detail?: T`

## event.preventDefault()
* importance in `.dispatchEvent(event)` 's returned value

## events in events are sync
* Events are processed in a queue
* If an event is dispatched within another one → that event is processed immediately 