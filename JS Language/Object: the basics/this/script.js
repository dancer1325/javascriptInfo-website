//                                                  Ways to define a method
// 1. As any property - propertyKey: propertyValue -
const user = {
    sayHi: function() {         //  sayHI  property key, while the function expression is the propertyValue
        console.log("user - Hello");
    }
};
// 2. propertyKey() {...}
const anotherUser = {
    sayHi() { // same as "sayHi: function(){...}"
        console.log("anotherUser - Hello");
    }
};
// 3. add once it's initialized the instance
anotherUser.sayAnotherHi = function () {
    console.log("sayAnotherHi invoked");
};
console.log("anotherUser.sayAnotherHi " + (anotherUser.sayAnotherHi));
// 4. reformat an existing one
// 4.1 If you pass an argument to a function which doesn't expect it -> nothing happen
anotherUser.sayAnotherHi(function () {
    console.log("sayAnotherHi reformat");
});
console.log("anotherUser.sayAnotherHi reformatted " + (anotherUser.sayAnotherHi));  // You haven't reformatted anything
anotherUser.sayAnotherHi = function () {
    console.log("sayAnotherHi reformat properly");
};
console.log("anotherUser.sayAnotherHi reformatted properly" + (anotherUser.sayAnotherHi));
anotherUser.sayAnotherHi();



//                                                  this
// 1. In methods
let otherUser = {
    name: "John",
    age: 30,
    sayHi() {
        console.log("otherUser this.name " + (this.name));     // "this" is the "current object"
        console.log("otherUser.name " + (otherUser.name));  // same result, via outer variable
    }
};
otherUser.sayHi();
// 1.1 if we copy the object
let admin = otherUser;
otherUser = null;
//admin.sayHi();      // Error due to use outerVariable of user which has been override to null

// 2. In functions
function sayHiFunction() {
    console.log( this.name );       // depends on the context, so during run-time
}
// 2.1 if it’s invoked / assigned from an object
let userWithMethodYet = { name: "John" };
let adminWithMethodYet = { name: "Admin" };
userWithMethodYet.f = sayHiFunction;
adminWithMethodYet.f = sayHiFunction;
userWithMethodYet.f();          // refers to the object on which it's invoked
adminWithMethodYet.f();         // refers to the object on which it's invoked

// 2.2 if we call directly
sayHiFunction();

// 2.3 if arrow function
let userWithArrowFunction = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);  // does not have its own this === takes the outer one
        arrow();
    }
};
userWithArrowFunction.sayHi();
