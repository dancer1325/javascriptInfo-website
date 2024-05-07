let arr = ["a", "b"];

// 1. No property function existing -- for..in iterate also through property functions --
for (let property in arr) {
    console.log("Previous to check push - property  " + property + " with value " + (arr[property]));
}
console.log("arr.length " + (arr.length));

// 2. No property function existing -- for..in iterate also through property functions --
console.log("arr.push " + (arr.push));      // Native code of push
for (let property in arr) {
    console.log("After checking push - property " + property + " with value " + (arr[property]));
}
console.log("arr.length " + (arr.length));

// 3. Once you invoke it -> added as item       TODO: Why?
arr.push(function() {
    console.log( this );
})
console.log("arr.push " + (arr.push));      // Native code of push
for (let property in arr) {
    console.log("property " + property + " with value " + (arr[property]));
}
console.log("arr.length " + (arr.length)); // Added as item to the array

arr[2](); // Calling as array's item an invoking the function