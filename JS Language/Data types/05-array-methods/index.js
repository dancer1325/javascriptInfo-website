// TODO:

// 2. Searching in array
// TODO:
// 2.3 .filter
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

// 3. Transform an array
// 3.1 .map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6
// TODO: