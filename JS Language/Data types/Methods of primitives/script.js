//                                                      String
// 1. How does it work?
let str = "Hello";      // primitive - string -
// to use a method -> object wrapper, String is created and destroyed, once the result is got
console.log("str.toUpperCase() " + (str.toUpperCase()));
// 2. Object wrapper constructor  -- new String()
let STR = new String(str);
let strViaObjectWrapper = String(str);      // != new String()  === primitive
console.log("typeof str " + (typeof str));
console.log("typeof STR " + (typeof STR));
console.log("typeof strViaObjectWrapper " + (typeof strViaObjectWrapper));      // primitive


//                                                      Number
// 1. How does it work?
let n = 1.23456;
// to use a method -> object wrapper, Number is created and destroyed, once the result is got
console.log("n.toFixed(2) " + (n.toFixed(2)));
// 2. Object wrapper constructor  -- new Number()
let N = new Number(n);
let nViaObjectWrapper = String(n);        // != new String()  === primitive
console.log("typeof n " + (typeof n));
console.log("typeof N " + (typeof N));
console.log("typeof nViaObjectWrapper " + (typeof nViaObjectWrapper));


//                                                      Boolean
// 1. How does it work?
let b = true;
// to use a method -> object wrapper, Boolean is created and destroyed, once the result is got
console.log("b.valueOf() " + (b.valueOf()));
// 2. Object wrapper constructor  -- new Boolean()
let B = new Boolean(b);
let bViaObjectWrapper = Boolean(b);        // != new Boolean()  === primitive
console.log("typeof b " + (typeof b));
console.log("typeof B " + (typeof B));
console.log("typeof bViaObjectWrapper " + (typeof bViaObjectWrapper));


//                                                      Symbol
// 1. How does it work?
let symbol = Symbol("symbol");
// to use a method -> object wrapper, Boolean is created and destroyed, once the result is got
console.log("symbol.description " + (symbol.description));
// 2. Object wrapper constructor  -- new Symbols()
let symbolWithNew = new Boolean(symbol);
console.log("typeof symbol " + (typeof symbol));
console.log("typeof symbolWithNew " + (typeof symbolWithNew));


//                                                      BigInt
// 1. How does it work?
const bigInt = 1234567890123456789012345678901234567890n;
// to use a method -> object wrapper, BigInt is created and destroyed, once the result is got
console.log("bigInt[Symbol.toStringTag] " + (bigInt[Symbol.toStringTag]));
// 2. Object wrapper constructor  -- new BigInt() doesn't exist!!!
const bigIntNumber = BigInt(2222);
console.log("typeof bigInt " + (typeof bigInt));
console.log("typeof bigIntNumber " + (typeof bigIntNumber));