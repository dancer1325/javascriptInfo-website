// 1. repeat with the interval of 2 seconds
// timerId      Identify the execution
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop the execution -- done via setTimeOut
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);