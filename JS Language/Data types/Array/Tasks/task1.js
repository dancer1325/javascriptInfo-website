let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;      // Copy by reference

shoppingCart.push("Banana");

// Since it's by reference -> same content
console.log( fruits.length );