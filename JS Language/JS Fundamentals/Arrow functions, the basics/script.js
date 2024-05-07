let arrowFunctionSum = (a, b) => a + b;
console.log("arrowFunctionSum(1,2) " + (arrowFunctionSum(1,2)));

// If there is just 1! parameter
let just1Parameter = message => console.log("just1Parameter " + message);   // No () are needed
just1Parameter('Alfred');

// If there are no parameters
let noParameters = () => console.log("noParameters " );     // Required the ()
noParameters();

// if the body is multiline → required return
let multiline = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};
console.log( "multiline(1, 2) " + (multiline(1, 2)) );
