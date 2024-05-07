// Replace Function Expressions with arrow functions in the code below:
function functionDeclaration(anotherFunction) {
    anotherFunction();
}

// The anonymous functions here are the only expression functions
functionDeclaration(
    function() { console.log("Function declared - You agreed."); }
);

//                                                                          Solution
functionDeclaration(
    () => { console.log("Arrow function - You agreed."); }       // Arrow function with no parameters
);