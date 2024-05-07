// 1. Bad working
function makeUser() {
    return {                // literal object
        name: "John",       // propertyKey: propertyValue
        ref: this           // property
    };
}
let user = makeUser();          // Function -> Node or Browser without strict, this = undefined
console.log( "user.ref.name " + (user.ref.name) );   // undefined.name

// 2. Good working
function makeUserWithMethod() {
    return {
        name: "John",
        ref() {             // Method
            return this;
        }
    };
};
let userWithMethod = makeUserWithMethod();
console.log( "userWithMethod.ref().name " + (userWithMethod.ref().name) ); // .ref() is a method -> this = object

