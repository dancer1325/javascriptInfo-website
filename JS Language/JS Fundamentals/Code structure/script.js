// 1. Statement
console.log("Statement");

// 2. ;
console.log("Statement with ; ");
console.log("Statement without ; ")

// 2.1 Exceptions in which a break line != ;
// 2.1.1  +
console.log("Exception1 - Statement " +
    "with break line" +
    " not understood as ; ")
// 2.1.2  []        -- if you try to indent at the beginning -> IDE doesn't allow you doing it -- You get an error via node
/*console.log("Exception 2 - ")
    [1, 2].forEach(() => console.log("Exception2"))*/
// In this case -> you would need to add ;
console.log("Exception 2 - ");
[1, 2].forEach(() => console.log("Exception2"))


// 3. Comments
/*
*/
