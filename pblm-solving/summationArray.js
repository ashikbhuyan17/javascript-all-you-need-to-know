// var sum = [20, 44, 33, 10]
// var summation = 0
// for (var i = 0; i < sum.length; i++) {
//     summation += sum[i];
//     console.log(summation)
// }

// console.log('summation of array = ', summation)


function addition(sum) {
    var summation = 0
    for (var i = 0; i < sum.length; i++) {
        summation += sum[i];
    }
    return summation
}
var sum = [20, 44, 33, 10]
var sum2= [10,20,30,40,100]

addition(sum)
console.log('summation of array = ', addition(sum))
console.log('summation of array = ', addition(sum2))




