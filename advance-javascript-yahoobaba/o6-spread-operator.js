// 1. rest operator accept kore multiple argument ja ekta array te convert kore 



// separate number generate
// const arr2 = [1, 23, 4, 5, 6, 7]
// console.log("🚀 ~ file: o6-spread-operator.js ~ line 23 ~ arr2  =>", ...arr2)



// // array of spread operator
// const arr3 = [1, 23, 4, 5, 6, 7]
// console.log("🚀 ~ file: o6-spread-operator.js ~ line 29 ~ arr3", [...arr3])




// function sum2(name, ...args) {
//     console.log("🚀 ~ file: o6-spread-operator.js:19 ~ sum2 ~ args", args)
//     let count = 0;
//     for (let index = 0; index < args.length; index++) {
//         const element = args[index];
//         count += element
//     }
//     return count
// }
// let array = [10, 20, 30]
// const summation2 = sum2("Aahik", array)
// console.log("🚀 ~ file: o6-spread-operator.js:29 ~ summation2", summation2)



function sum(name, ...args) {
    console.log("🚀 ~ file: o6-spread-operator.js ~ line 17 ~ sum ~ args", args)
    let count = 0;
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        console.log("🚀 ~ file: o6-spread-operator.js:38 ~ sum ~ element", element)
        count += element
    }
    return count
}
let arr = [10, 20, 30]
console.log("🚀 ~ file: o6-spread-operator.js:44 ~ arr", ...arr)
const summation = sum("Ashik", ...arr)
console.log("summation", summation)





