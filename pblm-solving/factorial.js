// factorial of n (n!) = 1 * 2 * 3 * 4....n

// let factorial = 1
// let numOfFactorial = 10
// for(var i=1;i<= numOfFactorial;i++){
//     factorial*= i
//     console.log(factorial)
// }
// console.log('total factorial '+ factorial)


// using for loop
// function factorial(numOfFactorial){
//     let calculate = 1
//     for(var i=1;i<= numOfFactorial;i++){
//         calculate*= i
//     }
//     return calculate
// }

// let result = factorial(10)
// console.log('total factorial ' + result)



// using while loop
function factorial(numOfFactorial) {
    let i = 1
    let calculate = 1
    while (i <= numOfFactorial) {
        if (i == 0 || i == 1) {
            break
        }
        else {
            calculate *= i
            console.log(calculate)
        }
        i++;
    }
    return calculate

}

let result = factorial(0)
console.log('total factorial ' + result)
