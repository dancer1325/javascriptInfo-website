//                                                  Boolean conversion
const person = {
    age: 31,
    name: "Alfred"
}
let booleanConversionOfPerson = Boolean(person);
console.log("booleanConversionOfPerson " + booleanConversionOfPerson);

//                                                  Number conversion
// not applied to objects itself == custom one need to be created
// Example
const objectWithNumberProperty1 = {
    value: 10
};
const objectWithNumberProperty2 = {
    value: 5
};
function subtractObjects(obj1, obj2) {
    if (typeof obj1.value === 'number' && typeof obj2.value === 'number') {
        return obj1.value - obj2.value;
    } else {
        throw new Error('Both objects must have a "value" property of type number for subtraction.');
    }
};
const customObjectSubtraction = subtractObjects(objectWithNumberProperty2, objectWithNumberProperty1);
console.log("customObjectSubtraction " + customObjectSubtraction);

//                                                  String conversion
console.log(person);        // .toString call, making the string conversion automatically

//                                                  Symbol.toPrimitive
// 1. It doesn't exist by default in any object
console.log(person[Symbol.toPrimitive]);
console.log(typeof person[Symbol.toPrimitive] == 'function');

// 2. Implement it for hint
const objWithCustomHint = {
    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return 10;
        }
        if (hint === "string") {
            return "hello";
        }
        return true;
    },
};
console.log(objWithCustomHint[Symbol.toPrimitive]);
console.log(typeof objWithCustomHint[Symbol.toPrimitive] == 'function');
console.log(+objWithCustomHint);     // 10        — hint is "number"
console.log(`${objWithCustomHint}`); // "hello"   — hint is "string"
console.log(objWithCustomHint + ""); // "true"    — hint is "default"

//                                                  toString / valueOf
// 1. No customized
const user = {
    name: "John",
    money: 1000
};
console.log("user.toString " + (user.toString));     // Exist by default the function property
console.log(user.toString);     // Exist by default the function property
console.log(user);              // hint "string"    -> toString invoked -- [object Object] --
console.log("user.valueOf " + (user.valueOf));      // Exist by default the function property
console.log(user.valueOf);
console.log(user.valueOf() === user); // returns the same object
console.log(+user);

// 2. Customized toString and valueOf
let userWithStringAndValueOfCustomized = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
        return this.money;
    }

};
console.log(userWithStringAndValueOfCustomized.toString);     // Custom toString
console.log(userWithStringAndValueOfCustomized);              // hint "string"    -> toString invoked -- TODO: Why not the custom one is used? --
console.log(userWithStringAndValueOfCustomized.toString());              // hint "string"    -> toString invoked -- [object Object] --
console.log("userWithStringAndValueOfCustomized.valueOf " + (userWithStringAndValueOfCustomized.valueOf));      // Exist by default the function property
console.log(userWithStringAndValueOfCustomized.valueOf);      // It exists and custom one
console.log(userWithStringAndValueOfCustomized.valueOf() === userWithStringAndValueOfCustomized); // false, since now it's customized and different to the default one
console.log(+userWithStringAndValueOfCustomized);       // hint "number"    -> valueOf invoked automatically
console.log(userWithStringAndValueOfCustomized + 50);       // hint "number"    -> valueOf invoked automatically

// 3. Implement custom .toString only
let userWithOnlyCustomToString = {
    name: "John",
    toString() {
        return this.name;
    }
};
console.log(userWithOnlyCustomToString);
alert(userWithOnlyCustomToString);          // toString -> John
console.log(userWithOnlyCustomToString.valueOf);        // Default valueOf exists
console.log(userWithOnlyCustomToString + 500); // if toString is the only one customized → use for all hint

