// 1. function accepts ARBITRARY number of arguments
function sum(a, b) {
    return a + b;
}

console.log( sum(1, 2, 3, 4, 5) );        // ONLY the first 2 are used      & NO error




// 2. `...`         to capture ARBITRARY number of arguments
function sumOnlyArbitraryArguments(...args) { // args == [] / capture ARBITRARY number of arguments
    let sum = 0;
    for (let arg of args) {
        console.log(arg);
        sum += arg;
    }
    return sum;
}
console.log( sumOnlyArbitraryArguments(1) ); // 1
console.log( sumOnlyArbitraryArguments(1, 2) ); // 3
console.log( sumOnlyArbitraryArguments(1, 2, 3) ); // 6

// 2.1 set ALSO EXPLICITLY arguments
function sumSetSpecificArgumentsAndAll(arg1, arg2, ...args) {
    console.log(`sumSetSpecificArgumentsAndAll - arg1 ${arg1} - arg2 ${arg2} - args ${args}`);
    let sum = 0;
    for (let arg of args) {
        console.log(`sumSetSpecificArgumentsAndAll - arg ${arg}`);
        sum += arg;
    }
    return sum;
}
console.log( sumSetSpecificArgumentsAndAll(1) );
console.log( sumSetSpecificArgumentsAndAll(1, 2) );
console.log( sumSetSpecificArgumentsAndAll(1, 2, 3) );

// 2.2 if you set `...` NOT -- as -- LAST argument -> ERROR | build-time
/*
function sumSetSpecificArgumentsAndArbitraryWrongly(arg1, ...args, arg2) {
    console.log(`sumSetSpecificArgumentsAndArbitraryWrongly - arg1 ${arg1} - arg2 ${arg2} - args ${args}`);
}*/




// 3. `arguments`                special built-in array-like object
function argumentsVariable() {
    console.log( `argumentsVariable ${arguments}` );
    for (let arg of arguments) {
        console.log(`argumentsVariable ${arg}`);
    }

    // array-like object            != array            -> array's methods can NOT be used
    //arguments.map ( (arg) => console.log(`argumentsVariable ${arg}`) );
}
argumentsVariable(1);
argumentsVariable(1, 2, 3, 4, 5);

//  3.1 capture ALL arguments       ALTHOUGH you set PREVIOUS EXPLICIT arguments
function argumentsVariableCaptureAll(arg1) {
    console.log( `argumentsVariableCaptureAll - arg1 ${arg1} - arguments ${arguments}` );
    for (let arg of arguments) {
        console.log(`argumentsVariableCaptureAll ${arg}`);
    }
}
argumentsVariableCaptureAll(1);
argumentsVariableCaptureAll(1, 2, 3);

// 3.2 arrow functions do NOT have THEIR OWN `arguments`
function arrowFunctionsNotHaveOwnArguments() {
    let showArg = () => {
        console.log(`arrowFunctionsNotHaveOwnArguments - arguments[0] ${arguments[0]} - arguments[1] ${arguments[1]}`);
    }
    showArg();      // ALTHOUGH, you do NOT pass arguments, since it's an arrow function -> points to outer function
}
arrowFunctionsNotHaveOwnArguments(1); // 1
arrowFunctionsNotHaveOwnArguments(1,2); // 1



// 4. `...`  spread syntax
let arr = [3, 5, 1];
// 4.1  list != array
console.log( Math.max(arr) ); // NaN, because it requires a list != array
// 4.2  spread syntax to transform array -- to --> list
console.log("spreadSyntaxTransformArrayToList " + Math.max(...arr) );
// 4.3 SEVERAL `...` spread syntax
let arr1 = [1, -1];
let arr2 = [8, 3, -8];
console.log("SEVERAL SPREAD syntax " + Math.max(...arr1, ...arr2) ); // 8
// 4.4 SPECIFY arguments + `...` spread syntax
console.log("SPECIFY arguments & SPREAD syntax NOT LAST argument " + Math.max(1, ...arr1, 2, ...arr2, 25) ); // `...` spread syntax NOT required to pass -- as -- LAST argument!!
// 4.5 use case as merging arrayS
let arrCopy = [0,...arr1, 5, ...arr2];
console.log("MERGING arrayS " + arrCopy);
// 4.6 string is ALSO an iterable
let string = "Hello";
console.log("string is ALSO an iterable ");
console.log([...string]);