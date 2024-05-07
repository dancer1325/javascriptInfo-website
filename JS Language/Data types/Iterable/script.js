//                                                                  Symbol.iterator
// Object which is not an iterable
let range = {
    from: 1,
    to: 5
};



//                                                                  for..of
// 1. if we try to use it directly -> we get an error
/*for (let num of range) {
    console.log("Previous to define Symbol.iterator - item " + num);
}*/
// 2. define Symbol.iterator
// 2.1 next() into Symbol.iterator
console.log('range[Symbol.iterator] ' + range[Symbol.iterator]);    // undefined
// Define it
range[Symbol.iterator] = function() {
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for..of loop
        next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};
console.log('range[Symbol.iterator] ' + range[Symbol.iterator]);    // Already defined
for (let num of range) {
    console.log("Once you have defined Symbol.iterator - item " + num);
}
// object.next  is not defined
console.log('range.next ' + range.next);

// 2.2 next() outside Symbol.iterator, as method
let rangeWithNextPropertyMethodDefined = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};
// object.next  is defined
console.log('rangeWithNextPropertyMethodDefined.next ' + rangeWithNextPropertyMethodDefined.next);
// next method will be used for the for..of
for (let num of range) {
    console.log("rangeWithNextPropertyMethodDefined - - item " + num);
}



//                                                                  String
const test = "test";
for (let char of test) {
    console.log( "char - " + char ); // t, then e, then s, then t
}
const str = '𝒳😂';       // Also valid for special characters
for (let char of str) {
    console.log( "char - " + char ); // 𝒳, and then 😂
}



//                                                                  Calling an iterator manually
const string = "Hello";
let iterator = string[Symbol.iterator]();      // Iterator
while (true) {
    let result = iterator.next();       // Default one, which iterates through each character, since it's a String which is an iterable
    if (result.done) break;
    console.log("Iterator manually - " + result.value);
}



//                                                                  Array-likes
let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
};
// for (let item of arrayLike) {}       // Error got, since it's not an iterable
console.log('arrayLike[Symbol.iterator] ' + arrayLike[Symbol.iterator]);    // undefined
console.log("arrayLike.push " + (arrayLike.push));      // undefined
console.log("arrayLike.pop " + (arrayLike.pop));        // undefined



//                                                                  Array.from()
// 1. with array-like
const arrayFirst = Array.from(arrayLike);
arrayFirst.push('AnotherProperty');

