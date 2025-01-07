import * as say from './index.js';

// 5. use the alias
say.hi("Alfred");
say.bye("Alfred");

// 6. `export default`
// NEXT 2, NOT ALLOWED
//import * from './user.js';
//import { DefaultUser } from './user.js';
import User from './defaultExport.js';
new User('John');

