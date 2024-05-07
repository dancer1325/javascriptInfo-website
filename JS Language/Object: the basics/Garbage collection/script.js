//
// 1.   1 Global variable, referencing an object
let user = {
    name: "John"
};
// if you overwrite that global variable -> the previous object with its address in memory is removed
user = null;

// 2.   1 global variable copied by reference
let anotherUser = {
    name: "John"
};
let copiedUser = anotherUser;       // Copy by reference -> point to the same memory address
anotherUser = null;
// Now, the object with property name is NOT deleted, because copiedUser points to it yet


// 3.   interlinking objects
// 3.1 deleting certain global variables
function marry(man, woman) {        // 2 objects are passed
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}
let family = marry({
    name: "John"
}, {
    name: "Ann"
});
delete family.father;
delete family.mother.husband;
// Now, the object with name "John" is unreachable

// 3.2 deleting the root global variable
let anotherFamily = marry({
    name: "John"
}, {
    name: "Ann"
});
anotherFamily = null
// Now, the rest of references are reachable -> are deleted by the garbage collector

