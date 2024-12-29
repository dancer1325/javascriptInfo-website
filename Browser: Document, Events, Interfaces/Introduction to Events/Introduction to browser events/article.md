# Introduction to browser events

* Event
  * := signal that something happened
  * ways to generate them
    * DOM nodes
    * ⚠️OTHERS ⚠️
  * DOM events
    * see [UIEvents specification](https://www.w3.org/TR/uievents/)
    * **Mouse events:**
      * [`click`](https://w3c.github.io/uievents/#event-type-click)
        * the mouse clicks | element 
        * tap | touchscreen devices 
      * [`contextmenu`](https://w3c.github.io/uievents/#event-type-contextmenu)
        * the mouse right-clicks | element
      * [`mouseover`](https://w3c.github.io/uievents/#event-type-mouseover) / [`mouseout`](https://w3c.github.io/uievents/#event-type-mouseout)
        * the mouse cursor comes over / leaves an element
      * [`mousedown`](https://w3c.github.io/uievents/#event-type-mousedown) / [`mouseup`](https://w3c.github.io/uievents/#event-type-mouseup)
        * the mouse button is pressed / released over an element
      * [`mousemove`](https://w3c.github.io/uievents/#event-type-mousemove)
        * the mouse is moved
    * **Keyboard events:**
      * [`keydown`](https://w3c.github.io/uievents/#event-type-keydown) and [`keyup`](https://w3c.github.io/uievents/#event-type-keyup)
        * keyboard key is pressed / released
    * **Form element events:**
      * [`submit`](https://html.spec.whatwg.org/#submitevent)
        * the visitor submits a `<form>`
      * [`focus`](https://w3c.github.io/uievents/#idl-focusevent)
        * the visitor focuses | element (_Example:_ `<input>`)
    * **Document events:**
      * [`DOMContentLoaded`](https://html.spec.whatwg.org/#event-domcontentloaded)
        * the HTML is loaded and processed == DOM is fully built
    * **CSS events:**
      * [`transitionend`](https://www.w3.org/TR/css-transitions-1/#event-transitionevent)
        * CSS-animation finishes

## Event handlers

* := function / if an event is triggered -> runs
* == way to run JS code | reaction to user actions
* if you want SEVERAL event handlers | SAME event -> use [`.addEventListener()`](#addeventlistener)
  * Reason: 🧠via HTML attribute or DOM property ONLY allow 1!, since they are overwritten 🧠
* 👀if you want to remove a handler -> ways 👀
  * assign `null`
  * `.removeEventListener()`
* ways to assign
  * [HTML attribute](#html-attribute)
  * [DOM property](#dom-property)
  * [`.addEventListener(eventName, handler, [options])`](#addeventlistener)

* _Example:_ see [here](Event%20handler)

### HTML-attribute

* `< htmlTag ... onEventName=”…” ...>`
  * 👀`´` is used within `"..."` 👀
    * == single quotes 
  * NOT case-sensitive
* How does it work?
  * browser reads the HTML attribute
  * based on the attribute content -- browser creates -- new function → writes it | DOM property
    * -> 💡event handler via HTML attribute == event handler via DOM property 💡 
* recommendations
  * if there is a lot of code -> extract it into a script
* _Example:_ see [here](Event%20handler)

### DOM property

* `domElement.onEventName = functionDeclarationNoExecution([event]){}`
* _Example:_ see [here](Event%20handler)

### addEventListener

* [`.addEventListener(eventName, handler, [options])`](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener)
  * 👀by default, it will listen the event forever 👀
  * 👀| SAME event, SEVERAL can be added 👀
  * `eventName: string`
  * `handler: Function | EventListener`
    * 👀`EventListener` == object of type `EventListener` 👀 
      * [`interface EventListener`](https://dom.spec.whatwg.org/#callbackdef-eventlistener)
        * `handleEvent(Event event): undefined`
          * 👀 get access to the event 👀
  * `[options]`
    * Optional
    * `once?: boolean`
      * 👀if `once: true` -> after 1@ execution, listener will be removed 👀
    * `passive?: boolean`
    * `capture?: boolean`
      * by default, it's `false`
        * == ONLY involved |
          * target phase
          * capture phase
      * allows
        * catching an event | capturing phase
  * ⚠️SOME events ONLY accepts `addEventListener()` ⚠️

* `.removeEventListener()`
  * ⚠️if arguments == `addEventListener()`'s arguments -> event handler is removed ⚠️

* _Example:_ [here](AddEventListener) & [here](addEventListener(,%20handlerViaEventListener,%20))

## Accessing the element: this

* `this`' value | event handler === HTML element
* _Example:_ see [this](this)

## Possible mistakes

* if [event handler -- via -- DOM property](#dom-property) -> declare the function
  * ❌NOT function execution ❌
* if [event handler -- via -- HTML attribute](#html-attribute) -> execute the function
  * ❌NOT function declaration ❌
  * Reason: 🧠 HTML attribute behavior 🧠
* event handlers do NOT work -- via -- `setAttribute` 
  * Reason: 🧠 attributes are ALWAYS `string`, NEVER a function 🧠
* 👀[event handler -- via -- DOM property](#dom-property) are case-sensitive 👀
* _Examples:_ see [here](Possible%20mistakes)

## Event object

* see [Event](https://dom.spec.whatwg.org/#interface-event)
* := object created -- by the -- browser | event happens /
  * -- is passed to -- [event handler](#event-handlers) ’s argument
  * properties
    * [`event.type: DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)
    * [`event.currentTarget: EventTarget`](https://dom.spec.whatwg.org/#interface-eventtarget)
      * == `this`
        * EXCEPT TO
          * handler is | arrow function, or
          * `this` -- is bound to -- something else
    * `event.clientX` / `event.clientY`
      * == Window-relative coordinates of the cursor
      * NO existing / ALL events
      * _Example:_ [MouseEvent](https://www.w3.org/TR/uievents/#idl-mouseevent)  👀
    * `event.eventPhase: number`
      * == event processing’s phase

* _Example:_ see [here](Event%20object)

## Tasks
* [Task1](Tasks/Task1)
* [Task2](Tasks/Task2)
* [Task3](Tasks/Task3)
* [Task4](Tasks/Task4)
* [Task5](Tasks/Task5)
* [Task6](Tasks/Task6)
* [Task7](Tasks/Task7)