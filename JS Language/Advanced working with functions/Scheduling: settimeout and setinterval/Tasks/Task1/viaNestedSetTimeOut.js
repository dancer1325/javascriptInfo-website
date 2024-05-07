function printNumbers(from, to) {
    let i = 0;
    if (i===0) i = from;

    if (from >= to) alert('Wrong arguments');
    else {
        let timerId = setTimeout(
            function internal() {
                console.log('i ' + i );
                // clearInterval(timerId) into setInterval
                // could seem weird, but timerId is stored in memory after each execution
                if (i===to) clearInterval(timerId)
                else {
                    i++;
                    timerId = setTimeout(internal, 1000);
                }
            },
            1000);
    }
}

// Comment or uncomment each case, depending on the scenario

// 1. bad arguments
//printNumbers(5,2);

// 2. good arguments
printNumbers(2,5);