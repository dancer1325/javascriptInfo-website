//                                                                   ??
// 1. without using ??
const a = 2;
const b = "else"
let result = (a !== null && a !== undefined) ? a : b;
console.log("?? - result " + result);

// 2. same, but using ??
let resultWithNullishCoalescingOperator = a ?? b;
console.log("?? - resultWithNullishCoalescingOperator " + resultWithNullishCoalescingOperator);

// 3. with ??, but being the first element null / undefined
// 3.1 being null
let c = null;
let resultWithNullishCoalescingOperatorBeingNull = c ?? b;
console.log("?? - resultWithNullishCoalescingOperatorBeingNull " + resultWithNullishCoalescingOperatorBeingNull);
// 3.2 being undefined
let d;
let resultWithNullishCoalescingOperatorBeingUndefined = c ?? b;
console.log("?? - resultWithNullishCoalescingOperatorBeingNull " + resultWithNullishCoalescingOperatorBeingNull);

// 4. Use cases
// 4.1 default value
let user;
console.log("?? - " + (user ?? "Anonymous"));       // ()   required to group and evaluating
// 4.2 select first not null / undefined from a list
let firstName = null;
let lastName = null;
let nickName = "Supermodel";
console.log("?? - " + (firstName ?? lastName ?? nickName ?? "Anonymous"));  // ()   required to group and evaluating

//                                                                   ||
// select first not truthy from a list
//  1. 0      -- falsy --        -> it returns the second element
let height = 0;
console.log("|| - height || 100 " + (height || 100));
// if you compare with ??       -> it returns the first element
console.log("|| - height ?? 100 " + (height ?? 100));
//  2. false      -- falsy --        -> it returns the second element
let heightIsAvailable = false;
console.log("|| - heightIsAvailable || exist " + (heightIsAvailable || "exist"));
// if you compare with ??       -> it returns the first element
console.log("|| - heightIsAvailable ?? exist " + (heightIsAvailable ?? "exist"));
//  3. ""      -- falsy --        -> it returns the second element
let emptyString = "";
console.log("|| - emptyString || exist " + (emptyString || "exist"));
// if you compare with ??       -> it returns the first element ("")
console.log("|| - emptyString ?? exist " + (emptyString ?? "exist"));
//  4. null      -- falsy --        -> it returns the second element
let variableNull = null;
console.log("|| - variableNull || exist " + (variableNull || "exist"));
// if you compare with ??       -> it returns the second element also here
console.log("|| - variableNull ?? exist " + (variableNull ?? "exist"));
//  5. undefined      -- falsy --        -> it returns the second element
let variableUndefined;
console.log("|| - variableUndefined || exist " + (variableUndefined || "exist"));
// if you compare with ??       -> it returns the second element also here
console.log("|| - variableUndefined ?? exist " + (variableUndefined ?? "exist"));

//  By precedence reasons -> forbidden use without (),  ?? && ||
//let x = 1 && 2 ?? 3;    // error got at run time
let x = (1 && 2) ?? 3;      // using () work
