function sayHi(user) {
    alert(`Hello, ${user}!`);
}

export {sayHi as default};
// == PREVIOUSLY have indicated export default function sayHi(user){....