//functionExpression()        // This variable can not be used, since it's not declared the function expression here
let functionExpression = function() {           // There is no functionName
    console.log( "functionExpression - Hello" );
};  // assigned to a variable
console.log("typeof functionExpression " + (typeof functionExpression));

// Show the function code
console.log("functionExpression " + functionExpression);

// It can be copied
let copiedFunctionExpression = functionExpression;      // No (), because we are not executing it, just copying
functionExpression();
copiedFunctionExpression();

//                                                  Callback function
// Function declaration
function simulateAsyncOperation(callback) {
    setTimeout(function() {
        const result = "Operation completed"; // Simulated result
        callback(null, result); // Call the callback with the result
    }, 2000); // Simulate a 2-second delay
}

// Using the callback function
simulateAsyncOperation(function(error, result) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Result:", result);
    }
});

// Anonymous function
function declaredFunction(anotherFunction) {
    console.log("Anonymous function");
    anotherFunction();
}

declaredFunction(
    function() {
        console.log("Invoked anonymous function")
        }, // Anonymous function
);
