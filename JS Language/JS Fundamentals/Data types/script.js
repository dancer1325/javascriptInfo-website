//                                                  JS is dynamic typed
let message = "hello";      // assigned string value
message = 123456;           // assigned number value

//                                                  numbers
let n = 123;         // accept integers
n = 12.345;          // and also floating

console.log("numbers Infinity - " + Infinity);  // Infinite
console.log("numbers -Infinity - " + -Infinity);  // - Infinite
console.log("typeof Infinity " + typeof Infinity);  // it belongs to number

console.log("not a number" / 2 );   // Nan
console.log( NaN + 1 ); // Any operation with NaN -> NaN
console.log( 3 * NaN ); // Any operation with NaN -> NaN
console.log( "not a number" / 2 - 1 ); // Any operation with NaN -> NaN
console.log("NaN ** 0 = " + (NaN ** 0));
console.log("typeof NaN " + typeof NaN);  // it belongs to number

// numbers just can represent [-(2^{53} -1), 2^{53} -1] -- 2^{53} -1 = 9007199254740991 --
// -> we get the same result in the next math operation
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

//                                                  bigint
const bigInt = 1234567890123456789012345678901234567890n;   //  n suffix === it's a bigInt
console.log("typeof bigInt " + typeof bigInt);

//                                                  string
let str = "Hello";      // double quotes  " "
let str2 = 'Single quotes are ok too';  // single quotes  ' '
let phrase = `can embed another ${str}`;    // backticks  ` `   interpolation is just available here
console.log("typeof str " + typeof str);
console.log("the result is ${1 + 2}");  // " doesn't admit interpolation
console.log('the result is ${1 + 2}');  // ' doesn't admit interpolation
console.log(`the result is ${1 + 2}`);  // ` admits interpolation

//                                                  boolean
let isGreater = 4 > 1;  // returned as result of comparisons
console.log("typeof isGreater " + typeof isGreater);

//                                                  null
let age = null;
console.log("typeof age " + typeof age);

//                                                  undefined
let variableNotAssigned;        // if you don't assign a value -> undefined
console.log("undefined typeof variableNotAssigned " + typeof variableNotAssigned);
let assignUndefined = undefined;    // assign undefined directly
console.log("undefined typeof assignUndefined " + typeof assignUndefined);

//                                                  objects & symbols
const person = {            // object
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["Reading", "Hiking", "Gaming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345",
    },
};
const mySymbol = Symbol();  // Symbol
const personWithSymbol = {
    [mySymbol]: "Secret data", // Using a symbol as a property key
    name: "John",
    age: 30,
};

//                                                  typeof operator
console.log("typeof Math " + typeof Math);  // Math     := built-in object which provides math operations
console.log("typeof null " + typeof null);  // Wrong behavior from first JS versions, of typeof which returns object, instead of null!!
console.log("typeof console " + typeof console);


