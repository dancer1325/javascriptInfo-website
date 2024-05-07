// 1. nested setTimeOut with callback & delayInms
let timerId = setTimeout(
    //  The key is to define the function, to call afterwards
    function tick() {
        alert('tick');
        timerId = setTimeout(tick, 2000);
    },
    2000
);

