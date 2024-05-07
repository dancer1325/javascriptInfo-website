let i = 0;
export function printNumbers(from, to) {
    if (i===0) i = from;
    if (from >= to) alert('Wrong arguments');
    else {
        console.log('i ' + i);
        i += 1;
    }
}

//TODO: Why doesn't importing the function work?