

// Array, index, set by index, indexOf
var number = [10, 50, 4, 5, 3, 6]
// console.log(number)
 console.log(number[2])
//  console.log(index.number[5])
 number[3]=50
 console.log(number)

//position ber korar jonno
 console.log(number.indexOf(3))
 console.log(number.indexOf(6))
 console.log(number.indexOf(555))

 // Array advanced, push, pop, array length
number.push(33)
console.log(number)
console.log(number.length)
//  push 1st position
number2 = [15, 50, 4, 5, 3, 6]
number2.unshift('palam')
console.log(number2)
/*
    pop - Removes from the End of an Array
    shift - Removes from the beginning of an Array
    splice - removes from a specific Array index
    filter - allows you to programatically remove elements from an Array
*/
// last element remove
number.pop()
console.log(number.length)
console.log(number)
// first element remove
number.shift()
console.log(number)

// splice - removes from a specific Array index
// The splice method can also be used to remove a range of elements from an array.
number2 = [15, 50, 4, 5, 3, 6]
number2.splice(2,2)

// slice hocce jekan takhe value delet hibe kintu array tik takhbe 
number2 = [15, 50, 4, 5, 3, 6]
var slice= number2.slice(2,5)
console.log('slice is : ' + slice)
console.log(number2)








