// 1. Constructor function declaration
function AcumulatorConstructorFunctionDeclaration(startingValue) {
    this.value = startingValue;
    this.valueToOperate;
    this.read = function () {
        this.valueToOperate = prompt("Give me the value to make crud operations");
    };
    this.sum = function () {
        console.log("valueToOperate " + (this.valueToOperate));
        console.log("value " + (this.value));
        const  sum = Number(this.value) + Number(this.valueToOperate);   // convert to number
        console.log("this.value + this.valueToOperate " + (this.value + this.valueToOperate));    // number conversion not done automatically
        console.log("sum " + sum);
    };
    this.mul = function () {
        console.log("valueToOperate " + (this.valueToOperate));
        console.log("value " + (this.value));
        console.log("mul " + (this.value * this.valueToOperate));        // number conversion automatically
    };
}

const acumulatorWithParenthesis = new AcumulatorConstructorFunctionDeclaration(3);
acumulatorWithParenthesis.read();
acumulatorWithParenthesis.sum();
acumulatorWithParenthesis.mul();

// 2. Constructor function expression
// TODO: Same, and the code would be duplicated in this file