//                                                              Local & outer variables
function showMessage() {
    let localVariable = "Hello, I'm JavaScript!"; // local variable
    const variableWithSameNameThatInner = "Alfred inside"; // local variable

    console.log( "showMessage - localVariable " + localVariable);

    console.log( "showMessage - outerVariable " + outerVariable);   // outer variable
    // No problem if the variable is declared afterwards the function definition

    // if outer variable name === local variable name → precedence of the local inner one
    console.log( "showMessage - variableWithSameNameThatInner " + variableWithSameNameThatInner);
}

const outerVariable = "Alfred";
const variableWithSameNameThatInner = "Alfred outside";
showMessage()


//                                                              Function's parameters
// They are passed as copy of the values!!!
function functionWithParameters(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    console.log("functionWithParameters " + from + ' : ' + text );
}
let from = "Ann";
functionWithParameters(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
console.log("functionWithParameters outside " + from ); // Ann

// Not mandatory to pass === if you don't pass === undefined
functionWithParameters(from); // *Ann*: undefined

// Default values
function functionWithParametersAndDefaultValues(from, text= "defaultValue") {
    from = '*' + from + '*'; // make "from" look nicer
    console.log("functionWithParameters " + from + ' : ' + text );
}
// Not mandatory to pass === if you don't pass === undefined, unless it's specified a default value
functionWithParametersAndDefaultValues(from); // *Ann*: defaultValue
// Even if you pass undefined -> default value is used
functionWithParametersAndDefaultValues(from, undefined); // *Ann*: defaultValue


//                                                              Function's return
// 1. if return is empty -> undefined
function withEmptyReturn(age) {
    if ( !age ) {
        return;
    }
}
let returnWithEmptyReturn = withEmptyReturn(0);
console.log("returnWithEmptyReturn " + returnWithEmptyReturn);

// 2. if there is no return -> undefined
function withoutReturn(age) {
    if ( !age ) {
    }
}
let returnWithoutReturn = withoutReturn(0);
console.log("returnWithoutReturn " + returnWithoutReturn);

// 3. breaking return in multiple lines
// 3.1 wrong done, since if you break in another line === ;
function withWrongBreakLine(firstNumber) {
    return      // === return;
    firstNumber + 2;
}
let returnWithWrongBreakLine = withWrongBreakLine(3);
console.log("returnWithWrongBreakLine " + returnWithWrongBreakLine);
// 3.2 right done
function withRightBreakLine(firstNumber) {
    return (
    firstNumber
        + 2
    );
}
let returnWithRightBreakLine = withRightBreakLine(3);
console.log("returnWithRightBreakLine " + returnWithRightBreakLine);

