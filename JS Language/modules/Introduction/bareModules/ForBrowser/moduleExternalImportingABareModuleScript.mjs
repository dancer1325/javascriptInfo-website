// 1. Error, bare module doesn't work!!
//import {functionFromBareModule} from 'baremodule.mjs';

// 2. It works if we use no bare modules
import {functionFromBareModule} from './baremodule.mjs'

functionFromBareModule();