//                                                          Problem which address
// Example1
let user = {};          // User without "address" property
console.log("user.address " + (user.address));
//console.log(user.address.street);   // Error got, since 'user.address' is already undefined

// Example2
let html = document.querySelector('.elem');
console.log("html " + html);
//html.innerHTML;       // Error got, since html is null

//                                                          ?.
// Example1
console.log("user?.address?.street " + (user?.address?.street));     // return undefined, not error thrown
console.log("user?.['address']?.['street'] " + (user?.["address"]?.["street"]));     // return undefined, not error thrown -- get access to properties via [] --
// Example2
console.log("html?.innerHTML " + (html?.innerHTML));
console.log("html?.['innerHTML'] " + (html?.["innerHTML"]));
// for methods === object's functions
let userAdmin = {
    admin() {
        console.log("userAdmin");
    }
};
let userGuest = {};
userAdmin.admin?.();        // It exists
userGuest.admin?.();        // No error is thrown, although it doesn't exist

// acts as a short circuit
user = null;
let x = 0;
user?.sayHi(x++);   // "user" is null ->  sayHi call not reach
console.log("x " + x);

// delete
delete user?.name;

// Invalid for writing operations   === left side of the assignment
let user = null;
// user?.name = "John";             // Error