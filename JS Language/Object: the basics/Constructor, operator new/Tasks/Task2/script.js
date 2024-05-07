// 1. Constructor function declaration
function CalculatorConstructorFunctionDeclaration() {
    this.a = 0;
    this.b = 0;
    this.read = function () {
        this.a = prompt("Give me the value for a");
        this.b = prompt("Give me the value for b");
    };
    this.sum = function () {
        console.log("a " + (this.a));
        console.log("b " + (this.b));
        const  sum = Number(this.a) + Number(this.b);   // conver to number
        console.log("this.a + this.b " + (this.a + this.b));    // number conversion not done automatically
        console.log("sum " + sum);
    };
    this.mul = function () {
        console.log("a " + (this.a));
        console.log("b " + (this.b));
        console.log("mul " + (this.a * this.b));        // number conversion automatically
    };
}
// 1.1 With ()
const calculatorWithParenthesis = new CalculatorConstructorFunctionDeclaration();
calculatorWithParenthesis.read();
calculatorWithParenthesis.sum();
calculatorWithParenthesis.mul();

// 1.2 Without ()
const calculator = new CalculatorConstructorFunctionDeclaration;
calculator.read();
calculator.sum();
calculator.mul();

// 2. Constructor function expression
// TODO: Same, and the code would be duplicated in this file