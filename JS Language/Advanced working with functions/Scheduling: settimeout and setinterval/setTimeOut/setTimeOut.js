// 1. callback & delayInms
function sayHi() {
    alert('Hello - sayHi -');
}

// sayHi         is the callback function
// 1000ms        delay time to call it -- Just 1! time --
setTimeout(sayHi, 1000);

// 2. callback & delayInms & [...args]
// Signature doesn't exist in JS -> Impossible to declare it with the same name
//function sayHi(phrase, who) {
function sayHiWithArguments(phrase, who) {
    alert( phrase + ', ' + who );
}

setTimeout(sayHiWithArguments, 1000, "Hello", "sayHiWithArguments");

// 3. callback as string & delayInms
setTimeout("alert('Hello - callback as string -')", 1000);

// 4. callback as arrow function & delayInms
setTimeout("alert('Hello - callback as arrow function -')", 1000);

// 5. callback, not a function executed!!
// TODO: Why does it run without throwing an error?
setTimeout(sayHi(), 1000);

// 6. setTimeOut returns timerId:number| NodeJs.TimeOut  (depend on the environment: browser, NodeJs)     -- identifying this execution --
// clearTimeOut(timerId)        allows cancelling the execution
// added high timeOut to be able to cancel previous to execute it  === alert not throw
let timerId = setTimeout(sayHiWithArguments, 2000, "timerId to identify it");
clearTimeout(timerId);
alert(timerId);         //  timerId is not null, after cancelling

// 7. setTimeOut with 0 delay
// This setTimeOut with 0 delay is executed after completing this script
setTimeout(() => alert("World - 0 delay"));
alert("Hello - 0 delay");
