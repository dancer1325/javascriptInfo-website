// Each module has its own level scope -> user can not be accessed
// alert(user); // no such variable (each module has independent variables)

import {user} from './user.js';

document.body.innerHTML = user; // John
