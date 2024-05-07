//                                                                      Ways to create an instance object
const object1 = new Object();
const object2 = {};
console.log("object1 " + object1);
console.log("object2 " + object2);


let user = {
    name: "John",  // by key "name" (string) store value "John"
    age: 30,        // by key "age" (string) store value 30
    "propertyKeyDoubleQuote": true,     // property keys can be declared via " / '
    'propertyKeySingleQuote': true,
    'propertyKey with multiwords': true, // multi-word property key
    lastProperty: true,     // trailing comma is optional
    //1Invalid          -- Invalid to start with a digit
    _propertyAnother: false,        // _        one of the valid identifiers
    $propertyAnother: false,        // $        one of the valid identifiers
    propertyWithValueUndefined: undefined,
};
console.log("user.name " + user.name);

// Add a property outside the declaration
user.isAdmin = true;
console.log("user.isAdmin " + user.isAdmin);

//                                                                          remove a property
delete user.age
console.log("user.age " + user.age);

//                                                                          get access to property keys with quotes
console.log("user.propertyKeySingleQuote " + user.propertyKeySingleQuote);
console.log("user.propertyKeyDoubleQuote " + user.propertyKeyDoubleQuote);

// get access to multi-word property key
console.log("user[\"propertyKey with multiwords\"] " + user["propertyKey with multiwords"]);
//user."propertyKey with multiwords";     //  For these ones -> . not valid

// get access to no existent propertyKey
console.log("user.height " + (user.height));        // undefined

//                                                                          check if a property exists via 'in'
console.log("'height' in user " + ("height" in user));
console.log("'name' in user " + ("name" in user));
const anotherProperty = "lastProperty"      // check via variable
console.log("anotherProperty in user " + (anotherProperty in user));

//                                                                          check if a property exists comparing getting access to it with undefined
console.log("user.randomProperty " + (user.randomProperty));        // undefined    - it doesn't exist
console.log("user.propertyWithValueUndefined " + (user.propertyWithValueUndefined));        // One could think that the property doesn't exist, but its value is undefined

//                                                                          check if a property exists by variable
let keyToFind = "lastProperty";
// 1. Invalid for '.'
console.log("user.keyToFind " + (user.keyToFind));

// 2. Valid for '[]'
console.log("user[keyToFind] " + (user[keyToFind]));

//                                                                          computed properties
const computedPropertyVariable = "Computed" + "property";       // evaluation done previously
user[computedPropertyVariable] = true;
console.log("user[computedPropertyVariable] " + (user[computedPropertyVariable]));

//                                                                          way to declare a property if propertyKey = propertyValue and you pass as variable
const floor = "floor";
const rooms = "rooms";
let home = {
  floor,
  rooms
  //stage       If it's not declare the variable, it doesn't work
};
console.log("home.floor " + home.floor);
console.log("home.rooms " + home.rooms);

//                                                                             reserved keywords are available as propertyKey
//home[for] = true        // Not valid to pass after object declaration via '[]'
home.for = true        // Valid to pass after object declaration via '.'
console.log("home.for " + home.for);
let humanBeing = {
    for: 'live',
    let: 2,
    return: "humanBeing"
}
console.log("humanBeing.for " + humanBeing.for);
console.log("humanBeing.let " + humanBeing.let);
console.log("humanBeing.return " + humanBeing.return);

//                                                                              Passing propertyKey != String    -> string conversion done automatically
const bigIntFromConstructor = BigInt("1234567890123456789012345678901234567890");
let passingNoStringsNoSymbolsPropertyKeys = {
  //2,      // Not possible to pass just the propertyKey
  2: "number",
  1234567890123456789012345678901234567890n: "bigint",
  bigIntFromConstructor: "bigint",
  false: "boolean",
  null: "null",
  undefined: "undefined"
};
console.log("typeof passingNoStringsNoSymbolsPropertyKeys['2'] " + (typeof passingNoStringsNoSymbolsPropertyKeys["2"]));        // All are converted to string
console.log("typeof passingNoStringsNoSymbolsPropertyKeys['1234567890123456789012345678901234567890n'] " + (typeof passingNoStringsNoSymbolsPropertyKeys["1234567890123456789012345678901234567890n"]));        // TODO: Why it's undefined?
console.log("typeof passingNoStringsNoSymbolsPropertyKeys['bigIntFromConstructor'] " + (typeof passingNoStringsNoSymbolsPropertyKeys["bigIntFromConstructor"]));        // All are converted to string
console.log("typeof passingNoStringsNoSymbolsPropertyKeys['false'] " + (typeof passingNoStringsNoSymbolsPropertyKeys["false"]));        // All are converted to string
console.log("typeof passingNoStringsNoSymbolsPropertyKeys['null'] " + (typeof passingNoStringsNoSymbolsPropertyKeys["null"]));        // All are converted to string
console.log("typeof passingNoStringsNoSymbolsPropertyKeys['undefined'] " + (typeof passingNoStringsNoSymbolsPropertyKeys["undefined"]));        // All are converted to string

//                                                                              __proto__      special property
// 1. number can not be passed
passingNoStringsNoSymbolsPropertyKeys.__proto__ = 2;
console.log("typeof passingNoStringsNoSymbolsPropertyKeys['__proto__'] " + (typeof passingNoStringsNoSymbolsPropertyKeys["__proto__"]));        // Object, not a number as we tried in the previous line
// 2. object can be passed
const objectToSet = new Object("first");
passingNoStringsNoSymbolsPropertyKeys.__proto__ = objectToSet;
console.log("typeof passingNoStringsNoSymbolsPropertyKeys['__proto__'] " + (typeof passingNoStringsNoSymbolsPropertyKeys["__proto__"]));        // Object
const getObjectProto = passingNoStringsNoSymbolsPropertyKeys["__proto__"];
console.log(getObjectProto.toString());

//                                                                              for .. in loop
for (let prop in user){                 // prop or any variable name could be indicated
    console.log("for .. in - prop " + prop);
}
// way to check if an object has no property
const emptyObject = {};
function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
};
console.log("isEmpty(emptyObject) " + (isEmpty(emptyObject)));

//                                                                              How are they ordered?
// 1. If they are integers      -> by ascending
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
for (let code in codes) {
    console.log("codes " + code); // 1, 41, 44, 49
}

// 2. If they are either integers or non integers       -> first integers and the end, the rest
let codesWithSomePlus = {
    "49": "Germany",
    "41": "Switzerland",
    "+49": "GermanyWithPrefix",     // it's in the middle
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
for (let code in codesWithSomePlus) {
    console.log("codesWithSomePlus " + code); // 1, 41, 44, 49
}

// 3. If they are non integers       -> in creation order
let man = {
    strength: "Medium",
    height: 1.83,
    money: "Millionaire",
};
for (let code in man) {
    console.log("man " + code); // 1, 41, 44, 49
}


