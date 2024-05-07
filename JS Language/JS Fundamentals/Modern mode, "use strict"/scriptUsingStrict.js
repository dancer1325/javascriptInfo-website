"use strict";
//  affect to the whole script

// 1. Getting errors
let name = 'Sacha';
let age = 31;

// 1.1 No existing variable declaration, and direct assignment  -- error previous to execute it --
//if (age>20) naame = 'Pepe'

// 1.2 Try to modify read-only attributes
const user = {};
Object.defineProperty(user, 'name', {value: 'Sacha', writable: false});
console.log(user.toString());
console.log(user.name);
//user.name = 'Alfredo'       // Error got in execution time

// 1.3 Try to extend objects restricted to be extended
const anotherUser = {name:'Sacha'};
Object.preventExtensions(anotherUser);
//anotherUser.age = 32;      // Error got in execution time

// 1.3.1 primitive variables can not be extended
const anotherName = "Alfredo";
//anotherName.anotherProperty = false     // Error got in execution time


// 1.4 duplicated arguments in a function
//function greetings(name, surname, name) {}      // Error got previous to execute it


// 1.5 octal numbers declared randomly are not allowed      -- Required to add the prefix '0o' or '0O'
//console.log(011);               // Error got previous to execute it
//console.log(023);               // Error got previous to execute it
console.log(0o11);
console.log(0O11);

// 1.6 Try to delete elements which can not be deleted
// 1.6.1 function
function greetingToDelete() {console.log("greetingToDelete")};
//delete greetingToDelete;               // Error got previous to execute it
// 1.6.2 variable
const nameTwo = "Alfredo"                 // Error got previous to execute it
//delete nameTwo;
// 1.6.3 window
//delete window;                         // Error got previous to execute it


// 1.7 Try to declare variables named as reserved keywords
//let eval = "eval";                    // Error got previous to execute it
//let arguments = "arguments";                    // Error got previous to execute it

// 1.8  'with'          -- Unrecommended from ES5 --
const person = {
    name: "John",
    age: 30,
};

/*
with (person) {                      // Error got previous to execute it
    console.log(name); // This works, but it's discouraged.
    console.log(age);  // This works, but it's discouraged.
*/
// Alternative is to access to the properties directly
console.log(person.name); // Access properties directly.
console.log(person.age);  // Access properties directly.


// 1.9      reference to a function
const userTwo = {
    name: "John",
    greeting: function () {
        console.log(`this ${this}`);
        //console.log(`Hello, my name is ${this.name}`);        // It doesn't work in NodeJs, because 'this' is undefined
        console.log(`Hello, my name is ${userTwo.name}`);        // It works in NodeJs
    }
};
const greetingDeclared = userTwo.greeting;
greetingDeclared();     // Here when it's executed, this === undefined
