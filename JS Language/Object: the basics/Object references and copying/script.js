//                                              Objects are stored and copied by reference
// 1. propertyValues are updated in both
let user = { name: 'John' };
let admin = user;
admin.name = "Alfred";
console.log("admin.name " + (admin.name));
console.log("user.name " + (user.name)); // since it's by reference -> it's updated

// 2. comparing objects
console.log("user == admin " + (user == admin));
console.log("user === admin " + (user === admin));
let a = {};     // if you try to compare objects with same values
let b = {};
console.log("a == b " + (a == b));
console.log("a === b " + (a === b));

// 3. const objects can modify their propertyKeys and propertyValues
const constantUser = {
    name: "John"
};
constantUser.name = "Pete"; // propertyValue modified
constantUser.age = 31;  // property added
console.log("constantUser.name " + constantUser.name);
console.log("constantUser.age " + constantUser.age);


//                                                        Clone and merge an object
// 1. iterating through all the properties
let userToClone = {
    name: "John",
    age: 30
};
let clone = {};         // the new empty object === new memory address
for (let key in userToClone) { // let's copy all user properties into it
    clone[key] = userToClone[key];
}
// Clone is a fully independent object with the same content
clone.name = "Pete";
console.log("userToClone.name " + (userToClone.name) + " while clone.name " + (clone.name));

// 2. Object.assign(destinationInstanceObject, … sources)
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
let objectWithPropertyAlreadyExisting = { name: "Alfred" }; // override the existing key with the propertyValue
height = 1.82 // It is not added, since it's not an object
let anotherObject = Object.assign(userToClone, permissions1, permissions2, height, objectWithPropertyAlreadyExisting);
// returned object has the same properties as the destinationInstanceObject
for (let key in userToClone) { // let's copy all user properties into it
    console.log("userToClone[key] with key " + key + " " + (userToClone[key]));
}
for (let key in anotherObject) { // let's copy all user properties into it
    console.log("anotherObject[key] with key " + key + " " + (anotherObject[key]));
}

// 3. {… sourceInstanceObject}
let anotherWayToClone = {... userToClone};
for (let key in anotherWayToClone) { // let's copy all user properties into it
    console.log("anotherWayToClone[key] with key " + key + " " + (anotherWayToClone[key]));
}
console.log("anotherWayToClone == userToClone " + (anotherWayToClone == userToClone));
console.log("anotherWayToClone === userToClone " + (anotherWayToClone === userToClone));

//                                                                  Nested objects
let nestedObject = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
console.log("nestedObject " + nestedObject);
for (let key in nestedObject) { // let's copy all user properties into it
    console.log("nestedObject[key] with key " + key + " " + (nestedObject[key]));
}
// 1. Object.assign(destinationInstanceObject, … sources)
let cloneOfNestedObject = Object.assign({}, nestedObject);
console.log("nestedObject.sizes.width " + (nestedObject.sizes.width));
cloneOfNestedObject.sizes.width = 100;
console.log("nestedObject.sizes.width " + (nestedObject.sizes.width));
console.log("cloneOfNestedObject.sizes.width " + (cloneOfNestedObject.sizes.width));  // source is changed because the nested object is copied by reference

// 2. structuredClone(instanceObject)       -- Just available in browsers --
let cloneWithStructuredClone = structuredClone(nestedObject);
console.log("nestedObject.sizes.width " + (nestedObject.sizes.width));
cloneWithStructuredClone.sizes.width = 200;
console.log("nestedObject.sizes.width " + (nestedObject.sizes.width));  // source is not changed, since it's cloned not copied
console.log("cloneWithStructuredClone.sizes.width " + (cloneWithStructuredClone.sizes.width));

// 2.1 any data type can be cloned
// 2.1.1 number
const number = 2;
let numberCloned = structuredClone(number);
console.log("number " + number);
console.log("numberCloned " + numberCloned);
numberCloned = 4;
console.log("number " + number);
console.log("numberCloned " + numberCloned);
// 2.1.2 bigInt
const bigInt = BigInt(22);
let bigIntCloned = structuredClone(bigInt);
console.log("bigInt " + bigInt);
console.log("bigIntCloned " + bigIntCloned);
bigIntCloned = BigInt(33);
console.log("bigInt " + bigInt);
console.log("bigIntCloned " + bigIntCloned);
// 2.1.3 string
const string = "Hello";
let stringCloned = structuredClone(string);
console.log("string " + string);
console.log("stringCloned " + stringCloned);
stringCloned = "Modified - Hello";
console.log("string " + string);
console.log("stringCloned " + stringCloned);
// 2.1.4 boolean
const isBoolean = true;
let isBooleanCloned = structuredClone(isBoolean);
console.log("isBoolean " + isBoolean);
console.log("isBooleanCloned " + isBooleanCloned);
isBooleanCloned = false;
console.log("isBoolean " + isBoolean);
console.log("isBooleanCloned " + isBooleanCloned);
// 2.1.5 null
const nul = null;
let nullCloned = structuredClone(nul);
console.log("nul " + nul);
console.log("nullCloned " + nullCloned);
// 2.1.6 undefined
const undefinedVariable = undefined;
let undefinedCloned = structuredClone(undefinedVariable);
console.log("undefinedVariable " + undefinedVariable);
console.log("undefinedCloned " + undefinedCloned);

// 2.2 circular references can be cloned
let objectWithCircularReference = {};
objectWithCircularReference.me = objectWithCircularReference;     // Circular reference:
console.log("objectWithCircularReference.me === objectWithCircularReference " + (objectWithCircularReference.me === objectWithCircularReference));
let cloneWithCircularReference = structuredClone(objectWithCircularReference);
console.log("cloneWithCircularReference.me === cloneWithCircularReference " + (cloneWithCircularReference.me === cloneWithCircularReference));  // Check if circular reference is cloned

// 2.3 function properties can not be cloned
let objectWithFunctionProperty = {
    f: function () { console.log("Property function f")},
}
objectWithFunctionProperty.f();
let clonedObjectWithFunctionProperty = structuredClone(objectWithFunctionProperty);
//clonedObjectWithFunctionProperty.f()          // It doesn't exist
