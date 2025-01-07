// ways to import
// 1. default outside {}
//import defaultFunction, {NAMED_EXPORT} from './mixingNamedAndDefaultExport.js';
//defaultFunction();

// 2. default -- via -- alias | {}
// import {default as DefaultOne, NAMED_EXPORT} from './mixingNamedAndDefaultExport.js';
//
// console.log(NAMED_EXPORT);
// DefaultOne();

// 3. import * == as an object
import * as all from './mixingNamedAndDefaultExport.js';
console.log(all.NAMED_EXPORT);
all.default();