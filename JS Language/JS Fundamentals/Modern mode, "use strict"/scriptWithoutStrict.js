// 1. Getting errors
let name = 'Sacha';
let age = 31;

// 1.1 No existing variable declaration, and direct assignment  -> allows automatic declaration!!
if (age>20) naame = 'Pepe'
console.log("naame " + naame);

// 1.2 Try to modify read-only attributes
const user = {};
Object.defineProperty(user, 'name', {value: 'Sacha', writable: false});
console.log(user.toString());
console.log(user.name);
user.name = 'Alfredo'       // No error got, but the value is not changed
console.log("user.name " + user.name);

// 1.3 Try to extend objects restricted to be extended
const anotherUser = {name:'Sacha'};
Object.preventExtensions(anotherUser);
anotherUser.age = 32;      // No error got, but it's not extended
console.log("anotherUser.age " + anotherUser.age);

// 1.3.1 primitive variables can not be extended
const anotherName = "Alfredo";
anotherName.anotherProperty = false     // No error, but not extended
console.log("anotherName.anotherProperty " + anotherName.anotherProperty);


// 1.4 duplicated arguments in a function
function greetings(name, surname, name) { console.log("name " + name + " surname " + surname)}      // No error got
greetings("Alfredo", "dancer", "Bingo");


// 1.5 octal numbers declared randomly are not allowed      -- Required to add the prefix '0o' or '0O'
//console.log(011);               // Error got previous to execute it
//console.log(023);               // Error got previous to execute it
console.log(0o11);
console.log(0O11);

// 1.6 Try to delete elements which can not be deleted
// 1.6.1 function
function greetingToDelete() {console.log("greetingToDelete")};
delete greetingToDelete;               // No error got
// 1.6.2 variable
const nameTwo = "Alfredo"              // No error got
delete name;
// 1.6.3 window
delete window;                         // No error got


// 1.7 Try to declare variables named as reserved keywords
let eval = "eval";                    // No error got
let arguments = "arguments";          // No error got

// 1.8  'with'          -- Unrecommended from ES5 --
const person = {
    name: "John",
    age: 30,
};

with (person) {                      // No error got now
    console.log(name); // This works, but it's discouraged.
    console.log(age);  // This works, but it's discouraged.
}

// 1.9      reference to a function
const userTwo = {
    name: "John",
    greeting: function () {
        console.log("Hello, my name is " + this.name);
    }
};
const greetingDeclared = userTwo.greeting;
greetingDeclared(); // If you execute in the browser === window.greetingDeclared()