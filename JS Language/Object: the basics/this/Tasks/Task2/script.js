let calculatorInstance = {
    a: 0,
    b: 0,
    read() {
        this.a = prompt("Give me the value for a");
        this.b = prompt("Give me the value for b");
    },
    sum() {
        console.log("a " + (this.a));
        console.log("b " + (this.b));
        const  sum = Number(this.a) + Number(this.b);   // conver to number
        console.log("this.a + this.b " + (this.a + this.b));    // number conversion not done automatically
        console.log("sum " + sum);
    },
    mul() {
        console.log("a " + (this.a));
        console.log("b " + (this.b));
        console.log("mul " + (this.a * this.b));        // number conversion automatically
    }
}

calculatorInstance.read();
calculatorInstance.sum();
calculatorInstance.mul();