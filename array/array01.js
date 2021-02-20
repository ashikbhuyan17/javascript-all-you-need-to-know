// The concat() Method
const array = [1, 2, 3];
const newArray = array.concat('12', true, null, 4, 5, 6, 'hello');
console.log(array);
console.log(newArray);
// We can concatenate an array with multiple arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const oneToNine = array1.concat(array2, array3);

console.log(oneToNine);

// Array, index, set by index, indexOf
var number = [10, 50, 4, 5, 3, 6]
// console.log(number)
console.log(number[2])
//  console.log(index.number[5])
number[3] = 50
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

// Adding Elements Anywhere in an Array
const weekdays = ['monday', 'tuesday', 'thursday', 'friday']
weekdays.splice(1, 0, 'wednesday', 'sd')
console.log("Anywhere : ", weekdays);

/*
    pop - Removes from the End of an Array
    shift - Removes from the beginning of an Array
    splice - removes from a specific Array index
    filter - allows you to progarmatically remove elements from an Array
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
// let removedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

number2 = [15, 50, 4, 5, 3, 6]
number2.splice(2, 2)
console.log("sp", number2);
// slice hocce jekan takhe value delet hobe kintu array tik takhbe 
number2 = [15, 50, 4, 5, 3, 6]
var slice = number2.slice(2, 5)
console.log('slice is : ' + slice)
console.log(number2)








