// function summation(a,b){
//     console.log("print out : ")
//     var sum=a+ b
//     return sum
// }
// console.log(summation(10,100))
// for(var i=0;i<=10;i++){
//     console.log(summation(10,100))
// }

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number( typeof 32243));




var arr1 = [1, 4, 7]
var arr2 = [5, 4, 10]
var arr3 = [15, 4, 7]

const sumArray = function (arr) {
    var sum = 0
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]

    }
    console.log(sum)
}
sumArray(arr1)
sumArray(arr2)
sumArray(arr3)

// var sum=0
// for(var i=0; i< arr1.length; i++){
//     sum=sum+arr1[i]

// }
// console.log(sum)
// var sum2=0
// for(var i=0; i< arr2.length; i++){
//     sum2=sum2+arr2[i]

// }
// console.log(sum2)
// var sum3=0
// for(var i=0; i< arr3.length; i++){
//     sum3=sum3+arr3[i]

// }
// console.log(sum3)
