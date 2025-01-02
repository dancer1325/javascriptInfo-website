function calculateSum(a, b) {
    "use strict";
    // This function runs in strict mode
    return a + b;
}

function normalFunction(x, y) {
    // This function runs in normal mode (non-strict)
    undefinedVariable = 42; // This would work (though not recommended)
    return x + y;
}

// Example usage
console.log(calculateSum(5, 3));  // Output: 8

// The strict mode only applies inside calculateSum function
// The code outside remains in non-strict mode
x = 10; // This works because it's outside strict mode
