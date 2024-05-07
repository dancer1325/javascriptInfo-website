//                                                      Constructor function
// 1. via function declaration
function User(name) {               // User         functionName always with the first letter as capital
    // this = {}            // Done automatically when it's invoked with new
    this.name = name;
    this.isAdmin = false;

    console.log("function declaration - new.target " + (new.target));      // Check if it's invoked the function via new

    // returned this;      // Done automatically when it's invoked with new
}
let user = new User("Jack");
// new makes    1) create {} -- empty object --, 2) this refers to this {}
console.log("function declaration - user.name " + (user.name));
console.log("function declaration - user.isAdmin " + (user.isAdmin));

// 2. via function expression
let userViaFunctionExpression = new function(){
    this.name = "Jack";
    this.isAdmin = false;
    console.log("function expression - new.target " + (new.target));      // Check if it's invoked the function via new
}
console.log("function expression - userViaFunctionExpression.name " + (userViaFunctionExpression.name));
console.log("function expression - userViaFunctionExpression.isAdmin " + (userViaFunctionExpression.isAdmin));

//                                                  new.target
let userWithoutNew = User("Alfred");        // Here, new.target     is undefined        -> return undefined
// console.log("function declaration - regular mode -  userWithoutNew.name " + (userWithoutNew.name));      -- Error got, since userWithoutNew is undefined
// console.log("function declaration - regular mode - userWithoutNew.isAdmin " + (userWithoutNew.isAdmin)); -- Error got, since userWithoutNew is undefined

//                                                  Literal object
let userViaLiteralObject = {            // Same results as previously via literal object
    name: "Jack",
    isAdmin: false
};

//                                                  Constructor function with return
// 1. return someObject;
function returningSomeObject() {
    this.name = "John";
    return { name: "Godzilla" };    // return another object
}
console.log("new returningSomeObject().name " + (new returningSomeObject().name));   // that object returned, not this
// 2. return;
function returnEmpty() {
    this.name = "John";
    return;     // returns this
}
console.log("new returnEmpty().name " + (new returnEmpty().name));      // refer to this

//                                                  Constructor function with no arguments
// () can be omitted
let withParenthesis = new User();
let withoutParenthesis = new User;
console.log(withParenthesis);
console.log(withoutParenthesis);        // Same properties and values, but pointing to another address of memory
console.log("withParenthesis == withoutParenthesis " + (withParenthesis == withoutParenthesis));
console.log("withParenthesis === withoutParenthesis " + (withParenthesis === withoutParenthesis));

//                                                  Constructor function with methods
function ConstructorFunctionDeclarationWithMethods(name) {
    this.name = name;
    this.sayHi = function() {           // adding a method
        console.log( "ConstructorFunctionDeclarationWithMethods - name " + this.name );
    };
}
let alfred = new ConstructorFunctionDeclarationWithMethods("Alfred");
alfred.sayHi();

//                                                  Regular functions
function RegularFunction(name) {
    if (!new.target) {          // if you run me without new
        return new User(name);  // Invoked as constructor function
    }
    this.name = name;
}
let john = RegularFunction("John");     // returns the instance object
console.log("Regular function - john.name " + (john.name));


