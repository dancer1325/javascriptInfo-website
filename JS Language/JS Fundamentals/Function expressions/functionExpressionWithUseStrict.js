"use strict";
let outerVariableWithFunctionExpression;
if (18) {       // Boolean conversion
    outerVariableWithFunctionExpression = function () {        // Function expression inside a scope
        console.log("functionExpressionUseStrict ");
    }
}

// Function expression assigned to an outer variable using strict
outerVariableWithFunctionExpression();