/**
 The map() method creates a new array populated with the results of calling a provided function
on every element in the calling array.

    map diye amara ager array theke new ekta array create krthe parbo
    ja ager array data kono poriborthon krbe na

 let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);

map() does not change the original array.

 */



// //  call back function
// const num = [10, 99, 55, 44, 33, 88]
// const newNumber = num.map(function (value) {
//     //  console.log(value);
//     return value * 2
// })

// console.log(newNumber);


// arrow function
const nameCollection = ['jamal', 'kamla', 'rahim']
const newNumber = nameCollection.map(names => {
    //  console.log(value);
    return names.toUpperCase()
})

console.log(newNumber);


// object 
const object = [
    { names: 'jaforikbal', available: 30 },
    { names: 'kamal', available: 30 },
    { names: 'nasim', available: 1 }
]

const newObject = object.map(item => {
    return item.names.toUpperCase()
})

console.log(newObject);