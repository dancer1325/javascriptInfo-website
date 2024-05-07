import {printNumbers} from "./printNumbers";

// 1. Via setInterval

// 1.1 Pass no valid arguments for printNumbers
let timerId = setInterval(printNumbers, 1000, 5, 2);

// Make an execution 6 seconds, in which we are sure that it's not printing more numbers
setTimeout(() => clearInterval(timerId), 6000);



// // 1.2 Pass 2 valid arguments for printNumbers
// let timerId = setInterval(printNumbers, 1000, 2, 5);
//
// // Make an execution 6 seconds, in which we are sure that it's not printing more numbers
// setTimeout(() => clearInterval(timerId), 6000);
