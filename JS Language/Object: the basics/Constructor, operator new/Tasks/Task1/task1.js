//                                  2 constructor functions creating the same instance
let obj = {};           // literal object

// possible to return an object from constructor function
function A() { return obj; }
function B() { return obj; }

// If it hasn't got arguments -> () can be omitted
const a = new A;
const b = new B;

// Same result
console.log(" a == b " + (a == b));
console.log(" a === b " + (a === b));

