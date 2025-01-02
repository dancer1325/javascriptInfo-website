function getModuleName() {
    return './moduleA.js';
}

// 1. NOT allowed to be generated dynamically
import { someFunction } from getModuleName(); // ONLY string literals allowed

// 2. NOT allowed to import
// 2.1 conditionally
let user = { isAdmin: true };
if (user.isAdmin) {
    import { adminTools } from './admin.js';  // Error!
}

// 2.2 | run-time
{
    import { adminTools } from './admin.js';  // Error!
}