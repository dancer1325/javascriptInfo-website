"use strict";
if (18) {       // Boolean conversion
    function welcome() {        // Function declaration inside a scope
        console.log("functionDeclarationUseStrict ");
    }

}

// Function is not declared globally using strict
welcome();      // Error got in runtime