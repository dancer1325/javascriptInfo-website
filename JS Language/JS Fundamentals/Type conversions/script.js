//                                                  String conversion
let value = true;
console.log("typeof value " + (typeof value));      // boolean
console.log("Automatic conversion by the operator - value " + value)       // converted automatically by the operator console.log to string

value = String(value)               // You can convert it manually
console.log("typeof value " + (typeof value));      // string
console.log("value " + value);      // string

//                                                  Number conversion
console.log("Automatic conversion by the operator - value " + ("6" / "2" ));

let str = "123";
let num = Number(str);              // You can convert it manually
console.log("typeof str " + (typeof str));
console.log("typeof num " + (typeof num));

// Numeric conversion rules
// 0.
let numericConversionOfStringWithWhitespaces = Number("     ");
console.log("typeof numericConversionOfStringWithWhitespaces "+ (typeof numericConversionOfStringWithWhitespaces));     // The type is number
console.log("numericConversionOfStringWithWhitespaces " + numericConversionOfStringWithWhitespaces);      // The value is 0
// 0.1
let numericConversionOfStringWithNonWhitespaces = Number("    hiii  ");
console.log("typeof numericConversionOfStringWithNonWhitespaces "+ (typeof numericConversionOfStringWithNonWhitespaces));     // The type is number
console.log("numericConversionOfStringWithNonWhitespaces " + numericConversionOfStringWithNonWhitespaces);      // The value is NaN
// 1. undefined
let numericConversionOfUndefined = Number(undefined);
console.log("typeof numericConversionOfUndefined "+ (typeof numericConversionOfUndefined));     // The type is number
console.log("numericConversionOfUndefined " + numericConversionOfUndefined);      // The value is NaN
// 2. null
let numericConversionOfNull = Number(null);
console.log("typeof numericConversionOfNull "+ (typeof numericConversionOfNull));     // The type is number
console.log("numericConversionOfNull " + numericConversionOfNull);      // The value is 0
// 3. true
let numericConversionOfTrue = Number(true);
console.log("typeof numericConversionOfTrue "+ (typeof numericConversionOfTrue));     // The type is number
console.log("numericConversionOfTrue " + numericConversionOfTrue);      // The value is 1
// 4. false
let numericConversionOfFalse = Number(false);
console.log("typeof numericConversionOfFalse "+ (typeof numericConversionOfFalse));     // The type is number
console.log("numericConversionOfFalse " + numericConversionOfFalse);      // The value is 0


//                                                  Boolean conversion
// 1. 0
let booleanConversionOf0 = Boolean(0);
console.log("typeof booleanConversionOf0 "+ (typeof booleanConversionOf0));     // The type is boolean
console.log("booleanConversionOf0 " + booleanConversionOf0);      // The value is false
// 2. null
let booleanConversionOfNull = Boolean(null);
console.log("typeof booleanConversionOfNull "+ (typeof booleanConversionOfNull));     // The type is boolean
console.log("booleanConversionOfNull " + booleanConversionOfNull);      // The value is false
// 3. undefined
let booleanConversionOfUndefined = Boolean(undefined);
console.log("typeof booleanConversionOfUndefined "+ (typeof booleanConversionOfUndefined));     // The type is boolean
console.log("booleanConversionOfUndefined " + booleanConversionOfUndefined);      // The value is false
// 4. NaN
let booleanConversionOfNaN = Boolean(NaN);
console.log("typeof booleanConversionOfNaN "+ (typeof booleanConversionOfNaN));     // The type is boolean
console.log("booleanConversionOfNaN " + booleanConversionOfNaN);      // The value is false
// 5. ""
let booleanConversionOfEmptyString = Boolean("");
console.log("typeof booleanConversionOfEmptyString "+ (typeof booleanConversionOfEmptyString));     // The type is boolean
console.log("booleanConversionOfEmptyString " + booleanConversionOfEmptyString);      // The value is false
// 6. 222222
let booleanConversionOfAnyNumberNo0 = Boolean(222222);
console.log("typeof booleanConversionOfAnyNumberNo0 "+ (typeof booleanConversionOfAnyNumberNo0));     // The type is boolean
console.log("booleanConversionOfAnyNumberNo0 " + booleanConversionOfAnyNumberNo0);      // The value is true
// 7. "NoEmptyString"
let booleanConversionOfNoEmptyString = Boolean("NoEmptyString");
console.log("typeof booleanConversionOfNoEmptyString "+ (typeof booleanConversionOfNoEmptyString));     // The type is boolean
console.log("booleanConversionOfNoEmptyString " + booleanConversionOfNoEmptyString);      // The value is true
