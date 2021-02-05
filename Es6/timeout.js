// ekabr execute hbe

function doSomething() {
    console.log(1111);
}

// serial ways kaj ses howar por setTimeout execute krbe.... 1000 => 1 sec por execute hbe
// setTimeout(doSomething, 10000)
setTimeout(() => {
    doSomething()
}, 2000);  // interview que : 2000 tkn execute hbe jokon full kaj ses hbe and 2000mls er por hbe age hbe na

console.log(22222);
console.log(3333);


// setInterval => ekta nirdisto somoy por por eta execute hbe
// setInterval(() => {
//     console.log('miss you');
// }, 1000);