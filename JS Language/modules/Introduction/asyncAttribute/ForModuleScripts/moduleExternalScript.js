// Since module's variables are module-scoped -> same variable can be used
const buttonDefinedBefore = document.getElementById('buttonDefinedBefore');
console.log("External - buttonDefinedBefore == null " + (buttonDefinedBefore == null));

const divDefinedAfterwards = document.getElementById('myDiv');
console.log("External - divDefinedAfterwards == null " + (divDefinedAfterwards == null));