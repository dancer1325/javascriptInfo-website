let ladder = {
    step: 0,
    up() {
        this.step++;        // As method -> this refers to the object
        return this;        // Make it chainable the method invocation
    },
    down() {
        this.step--;        // As method -> this refers to the object
        return this;        // Make it chainable the method invocation
    },
    showStep: function() {
        console.log( this.step ); // As method -> this refers to the object
        return this;        // Make it chainable the method invocation
    }
};
ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep();