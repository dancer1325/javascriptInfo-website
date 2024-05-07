//                                                                          Instantiate
let symbolWithoutName = Symbol();
// Optional the description
let symbolWithName = Symbol("Alfred");
let symbolWithSameName = Symbol("Alfred");

//                                                                          They are uniques, independently if you pass the same description
console.log("symbolWithoutName == symbolWithName " + (symbolWithoutName == symbolWithName));
console.log("symbolWithoutName === symbolWithName " + (symbolWithoutName === symbolWithName));
console.log("symbolWithSameName === symbolWithName " + (symbolWithSameName === symbolWithName));
console.log("symbolWithSameName == symbolWithName " + (symbolWithSameName == symbolWithName));

//                                                                          No existent automatic string conversion
console.log(symbolWithName);        // .toString() is used automatically
//console.log("symbolWithName " + symbolWithName);        //  Error got because .toString() used automatically
//alert(symbolWithName)               // Error got, since it doesn't try to use .toString()
alert(symbolWithName.toString())

//                                                                          Uses
// 1. hidden properties
let user = { // belongs to another code
    name: "John"
};
let id = Symbol("id");
user[id] = 1;       // Add symbol property
console.log("user['id'] " + (user["id"]));      // No access to it
console.log("user.id " + (user.id));            // No access to it
console.log(user[id]);            // Way access to it!! -- without '' --
// 1.1 If you try to address it with string -> collide / crash with others
user.id = "Our id value";       // First guy / script
user.id = "Their id value"      // Another guy / script
console.log("user.id " + (user.id));    // just persist the last one
// 1.2 symbol properties are skipped from  for..in
const anotherSymbol = Symbol("id");
const anotherSymbolProperty = Symbol("idOther");
let specialMan = {
    name: "Alfred",
    age: 40,
    [anotherSymbol]: 123,
    [anotherSymbolProperty]: "anotherSymbol"
};
for (let propertyKey in specialMan) {
    console.log("specialMan property " + propertyKey);  // symbol properties don't go through here
}
// 1.3 Object.keys(instanceObject)      don’t return symbol properties
console.log("Object.keys(specialMan) " + (Object.keys(specialMan)));
// 1.4 Copied the symbol properties, cloning an instance
let cloneSpecialMan = Object.assign({}, specialMan);        //{}  new target, and returning cloned object
console.log(cloneSpecialMan[anotherSymbol]);        // Way to access to symbol properties
console.log(cloneSpecialMan[anotherSymbolProperty]);

// 2. Define a property of symbol type in an object literal
let man = {
    name: "John",
    [id]: 123           // not "id": 123 nor id: 123 -- since it's understood as string --
};
console.log(typeof man["id"]);


//                                                                          Global symbol registry
// 1. Symbol.for(key)  -> return a symbol
const againId = Symbol.for("id");      // if the symbol exists fine, if not, it is created,
const idAgain = Symbol.for("id");
console.log( "againId === idAgain " + (againId === idAgain) );
const localSymbol = Symbol("name");     // not created with Symbol.for
console.log("Symbol.keyFor(localSymbol) " + (Symbol.keyFor(localSymbol)));  // undefined, because it's local symbol, and not able to find the name / key

// 2. Symbol.keyFor(symbol)  -> return a name
const symbolByKeyAgainId = Symbol.keyFor(againId);
const symbolByKeyIdAgain = Symbol.keyFor(idAgain);
console.log("symbolByKeyAgainId " + symbolByKeyAgainId);
console.log("symbolByKeyIdAgain " + symbolByKeyIdAgain);

