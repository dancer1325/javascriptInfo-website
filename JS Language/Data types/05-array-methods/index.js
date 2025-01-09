// TODO:

// 2. .forEach()
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});


// 3. Searching in array
// TODO:
// 3.3 .filter
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
let someUsers = users.filter((element, index, array) => {
    console.log(element, index, array)
    return element.id==2;
    }
);
console.log("AFTER filter" + someUsers);
console.log(someUsers.length);

// 4. Transform an array
// 4.1 .map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6
// TODO: