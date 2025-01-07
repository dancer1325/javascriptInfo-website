// 1. `export declarationOfVariableOrFunctionOrClass`
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const MODULES_BECAME_STANDARD_YEAR = 2015;
export class User {
    constructor(name) {
        this.name = name;
    }
}   // NO need `;`
export function sayHi(user) {
    console.log(`Hello, ${user}!`);
}   // NO need `;`

// 2. `export` -- apart from -- declarations
function sayBye(user) {
    console.log(`Bye, ${user}!`);
}
function sayByeAnother(user) {
    console.log(`sayByeAnother, ${user}!`);
}
export {sayBye, sayByeAnother};

// 3. TODO: `import *`

// 4. TODO: `import something as aliasToGive from ...`

// 5. `export someDeclaration as aliasForTheDeclaration
export {sayHi as hi, sayBye as bye};