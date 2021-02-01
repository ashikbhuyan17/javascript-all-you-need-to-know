/**
 When three dots (…) is at the end of function parameters, it's "rest parameters" 
 and gathers the rest of the list of arguments into an array. 
 When three dots (…) occurs in a function call or alike, it's called a "spread operator"
  and expands an array into a list.
 */


// Spread operator
const num = [10, 2, 33, 55, 66]
const num2 = [10, 2, 33, 55, 6655, 88, 88]
const num3 = [10, 2, 33, 55, 66, 55]
const addNumber = [...num, ...num2, 5, ...num3]
// const addNumber = num.concat(num2).concat(5).concat(num3)
console.log(addNumber);


// const a = 44
// const b = 50
// const c = 10
// const result = Math.max(a,b,c)
// console.log('max number = : ' + result);


// array max
const arr = [10, 99, 5, 88, 45]
const result = Math.max(...arr)
console.log(result);