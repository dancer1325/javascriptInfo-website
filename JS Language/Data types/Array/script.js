//                                                                  Instantiations
// 1. new Array()
let arr = new Array();
console.log("typeof arr " + (typeof arr));      // object

// 2. {}
let arr2 = new Array();
console.log("typeof arr2 " + (typeof arr2));        // object
// If you pass 1! number    -> an empty array with that length is created
let arr3 = new Array(3);
console.log("arr3 " + arr3);
console.log("arr3.length " + arr3.length);

//                                                               Methods and ordering
let fruits = ["Apple", "Orange", "Plum"];
// 1. First element
console.log("fruits[0] " + (fruits[0]));
console.log("fruits[2] " + (fruits[2]));
// 2. Replace
fruits[2] = "Banana";
console.log("fruits[2] " + (fruits[2]));
// 3. Add new element, although there are some items without elements
fruits[5] = "Coconut";
console.log("fruits[5] " + (fruits[5]));
// 4. .length
// the greatest numeric index + 1           !=  # of elements
console.log("fruits.length " + (fruits.length));
console.log("fruits " + fruits);
// writable property
fruits.length = 2       // Truncate
console.log("fruits.length " + (fruits.length));
console.log("fruits " + fruits);
fruits.length = 10      // Irreversible to get back the previous elements
console.log("fruits.length " + (fruits.length));
console.log("fruits " + fruits);
fruits.length = 0;                   // Simplest way to clear an array
// 5. .toString
fruits = ["Apple", "Orange", "Plum"];
console.log("fruits.toString " + (fruits.toString));     // existing    -- own implementation --
console.log(fruits.toString());
// for any hint case → toString is used
const arrayWithNumbers = [1,3,6];
console.log("arrayWithNumbers + 2 " + (arrayWithNumbers + 2));
// 6. elements of different types
let arrayWithDifferentDataTypes = [
    'Apple',
    2,
    true,
    null,
    undefined,
    BigInt(1234567890123456789012345678901234567890),
    Symbol('symbol'),
    {
        name: 'Alfred'
    },
    function (){console.log('arrayWithDifferentDataTypes');}
]
// 7. instanceArray.at(position)    == instanceArray[position]
// [-1] doesn't work    -- because it looks for literally the element '-1' --
console.log("arrayWithDifferentDataTypes[-1] " + (arrayWithDifferentDataTypes[-1]));
// [instance.length -1]     -- get the last element via calculation --
const arrayWithDifferentDataTypesLength = arrayWithDifferentDataTypes.length;
console.log("arrayWithDifferentDataTypesLength " + arrayWithDifferentDataTypesLength);
console.log("arrayWithDifferentDataTypes[arrayWithDifferentDataTypes.length-1] " + (arrayWithDifferentDataTypes[arrayWithDifferentDataTypesLength-1]));
// .at(-1)
console.log("arrayWithDifferentDataTypes.at(-1) " + (arrayWithDifferentDataTypes.at(-1)));
// 8. Symbol.toPrimitive        -- doesn't exist by default in any object, although it can be defined --
console.log("arrayWithDifferentDataTypes[Symbol.toPrimitive] " + (arrayWithDifferentDataTypes[Symbol.toPrimitive]));
// 9. valueOf           -- inherited from object --
console.log("arrayWithDifferentDataTypes.valueOf " + (arrayWithDifferentDataTypes.valueOf));


//                                                              Dequeue structure of data
// 1. push          -- appends elements to the end --
console.log("arrayWithDifferentDataTypes.at(-1) " + (arrayWithDifferentDataTypes.at(-1)));
arrayWithDifferentDataTypes.push('LastElement', 'AnotherLastElement');
console.log("arrayWithDifferentDataTypes.at(-1) " + (arrayWithDifferentDataTypes.at(-1)));
console.log("arrayWithDifferentDataTypes.at(-2) " + (arrayWithDifferentDataTypes.at(-2)));
// 2. shift         -- get the 1@ element, and move the rest 1 position before  --
console.log("arrayWithDifferentDataTypes[0] " + (arrayWithDifferentDataTypes[0]));
console.log("arrayWithDifferentDataTypes.shift() " + (arrayWithDifferentDataTypes.shift()));
console.log("arrayWithDifferentDataTypes[0] " + (arrayWithDifferentDataTypes[0]));
// 3. pop           -- take 1 element from the end --
console.log("arrayWithDifferentDataTypes.at(-1) " + (arrayWithDifferentDataTypes.at(-1)));
console.log("arrayWithDifferentDataTypes.pop() " + (arrayWithDifferentDataTypes.pop()));
console.log("arrayWithDifferentDataTypes.at(-1) " + (arrayWithDifferentDataTypes.at(-1)));
// 4. unshift      -- appends elements to the beginning --  This method is not part of dequeue structure of data
console.log("arrayWithDifferentDataTypes[0] " + (arrayWithDifferentDataTypes[0]));
console.log("arrayWithDifferentDataTypes[1] " + (arrayWithDifferentDataTypes[1]));
arrayWithDifferentDataTypes.unshift('FirstElement', 'AnotherFirstElement');
console.log("arrayWithDifferentDataTypes[0] " + (arrayWithDifferentDataTypes[0]));
console.log("arrayWithDifferentDataTypes[1] " + (arrayWithDifferentDataTypes[1]));


//                                                              It's an object
// 1. Copy by reference
console.log(fruits);
const copyOfFruits = fruits;
console.log("fruits == copyOfFruits " + (fruits == copyOfFruits));
console.log("fruits === copyOfFruits " + (fruits === copyOfFruits));
console.log("copyOfFruits.push('Kiwi') " + (copyOfFruits.push('Kiwi')));
console.log("fruits == copyOfFruits " + (fruits == copyOfFruits));
console.log("fruits === copyOfFruits " + (fruits === copyOfFruits));
// 2. Create a property
fruits.shop = 'Pepe fruit shop';
console.log("fruits.shop " + (fruits.shop));


//                                                              Ways to misuses an array
// 1. adding a non-numeric property
console.log("typeof fruits.shop " + (typeof fruits.shop));
// 2. leave positions without items
console.log(fruits);
// 3. fill the array in the reverse order
fruits[12] = 'Grape';
fruits[11] = 'Mango';
console.log(fruits);


//                                                              Ways to run through all array’s elements
console.log(fruits);
// 1. for
for (let i = 0; i < fruits.length; i++) {     // access to index and values
    console.log("for - fruits[i] " + (fruits[i]));
}
// 2. for..of
for (let fruit of fruits) {         // just access to values
    console.log("for..of - fruit " + fruit);
}
// 3. for..in
// inherited from objects
// iterate over also array's properties
for (let key in fruits) {              // just access to values
    console.log("for..in - fruits[key] " + (fruits[key]));
}


//                                                              Multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("matrix " + matrix);

//                                                              Comparison
// 1. No referring to the same address of memory
console.log("[] == [] " + ([] == []));
// 2. Comparing primitives with array objects
// 2.1 ==
console.log("0 == [] " + (0 == []));            // IDE points out the automatic conversion happening, from object -> primitive
console.log("'' == [] " + ('' == []));          // IDE points out the automatic conversion happening, from object -> primitive
// 2.2 ===
console.log("0 === [] " + (0 === []));            // No conversion happening
console.log("'' === [] " + ('' === []));          // No conversion happening
