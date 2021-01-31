// function summation(a, b) {
//     b = b || 0;

//     // undefined = false
//     // if (b == undefined) {
//     //     b = 0
//     return a + b
// }

// const total = summation(10)
// console.log(total);




//  condition esb na diye direct value dile o hbe ...
function sum(a, b = 90) {
    return a + b
}

// b=90 tkn count hbe jkn b er value  parameter hisebe pass na krbe
// const total = sum(10, 5)

const total = sum(10)
console.log(total);