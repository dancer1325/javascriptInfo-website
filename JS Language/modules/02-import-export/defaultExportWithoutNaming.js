// default export does NOT require to provide a name
// A) class
export default class { // no class name
    constructor() {
    }
}
// B) function
export default function(user) { // no function name
    alert(`Hello, ${user}!`);
}
// C) variable
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];