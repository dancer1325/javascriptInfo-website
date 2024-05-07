//                                                  if automatically uses boolean conversion
if (1 && " NonEmpty") {
    console.log("Boolean conversion - truthy");
}

//                                                  ? :         ternary operator
let ternaryOperator = (18) ? "returnIfItsTruthy" : "returnIfItsFalsy";
console.log("ternaryOperator " + ternaryOperator);

// Nested ternary operators
const age = 5
let message = 0 ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';
console.log("Nested ternary operators " + message);