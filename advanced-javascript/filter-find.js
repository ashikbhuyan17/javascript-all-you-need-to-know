

// find() method returns the value of the first element in the provided array and find() does not change the original array.
/**
 *
filter() method creates an array filled with all array elements that pass a test (provided as a function).
Note: filter() does not execute the function for array elements without values.
Note: filter() does not change the original array.

*/

// find
const num = [10, 99, 55, 44, 33, 88]
const newNumber = num.find((num) => {
    return num > 55;
})
console.log(newNumber);

// find
const object = [
    { names: 'jaforikbal', available: 30, marks: 40 },
    { names: 'kamal', available: 30, marks: 60 },
    { names: 'nasim', available: 1, marks: 50 }
]

const newObject = object.find(item => {
    return item.marks > 40
})

console.log('marks find : ', newObject);



// filter
const numOf = [10, 99, 55, 44, 33, 88]
const newNumber2 = numOf.filter((num) => {
    return num > 55;
})
console.log('filter : ', newNumber2);


const object2 = [
    { names: 'jaforikbal', sub: 'b', marks: 40 },
    { names: 'kamal', sub: 'c', marks: 60 },
    { names: 'nasim', sub: 'd', marks: 50 }
]


const newObject2 = object2.filter(item => item.marks > 30 && item.sub === 'b')
// const newObject2 = object2.filter(item => {
//     return item.marks > 30 && item.sub === 'b'
// })
console.log('marks filters : ', newObject2);


// duplicate value remove by filter
const numbers = [1, 99, 55, 44, 33, 88, 1, 1, 1, 3, 3, 3]

const removeDuplicateValue = numbers.filter(function (value, index, arr) {
    return arr.indexOf(value) === index;
})
console.log(removeDuplicateValue);
