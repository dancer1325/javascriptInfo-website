//                                              Declare and assign in different steps
let message;
message = 'Hello!';
console.log("Declare and assign in different steps - " + message);
message = 'Hello reassigned';
console.log("Declare and assign in different steps - " + message);

//                                             Declare and assign in the same step
let messageTwo = 'Hello!'; // define the variable and assign the value
console.log("Declare and assign in the same step - " + messageTwo);

//                                              Declare multiple variables in the same line
let user = 'John', age = 25, messageAnother = 'Hello';
// Although it's possible -> recommended to do it via multilines
// Alternative 1    -- applying indentation --
let userTwo = 'JohnTwo',
    ageTwo = 52,
    messageTwoAnother = 'Hello - Two';
// Alternative 2    -- using comma-first style === in the breaking line --
let userTwoTwo = 'JohnTwo'
    , ageTwoTwo = 52
    , messageTwoTwo = 'Hello - Two';

//                                              Copy variable's data to another variable
let hello = 'Hello world!';
let messageThree = hello;
console.log("Copy variable data -- " + hello);
console.log("Copy variable data -- " + messageThree);

//                                              Declare twice the same variable
let variableDeclaredTwice;
//let variableDeclaredTwice;      // Error in runtime

//                                              Variable naming
let $ = 1;      // Available character for a variable name
let _ = 2;      // Available character for a variable name
console.log("Variable naming - $ " + $ + " _ " + _);
//let 1a;         // Cannot start with a digit   -- error previous to run
//let my-name;    // hyphens '-' aren't allowed in the name  -- error previous to run
let apple = "apple";
let APPLE = "APPLE";    // Case-sensitive
console.log("Variable naming - apple " + apple + " APPLE " + APPLE);
let имя = '...';  // non-latin letters are allowed, but not recommended
let 我 = '...';   // non-latin letters are allowed, but not recommended
// let let = 5;      // Can't name a variable "let", error run it -- Reserved keyword
//let return = 5; // also can't name it "return", error previous to run -- Reserved keyword

//                                              Declaration via const
const MY_BIRTHDAY = '18.04.1982';
//MY_BIRTHDAY = '01.01.2001'; // Can't reassign the constant -- Error previous to run
// ff the value is known prior to execution → recommendation to use capital letters for naming
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";





