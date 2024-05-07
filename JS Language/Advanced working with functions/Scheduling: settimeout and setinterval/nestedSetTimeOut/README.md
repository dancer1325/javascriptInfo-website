# setTimeOut
Understand setTimeOut

## Notes
* Cases
    * nested setTimeOut with callback & delayInms
    * nested setTimeOut with Zero delay
      * In the browser, after 5 nested timers -> non Zero delay -- [Link](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers)
      * In the server-side, Zero delay always
