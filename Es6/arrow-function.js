// // Traditional Function
// function (a){
//     return a + 100;
//   }

//   // Arrow Function Break Down

//   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   }

//   // 2. Remove the body brackets and word "return" -- the return is implied.
//   (a) => a + 100;

//   // 3. Remove the argument parentheses
//   a => a + 100;



// empty body/parameter
const empty = () => 5
console.log('empty = ' + empty());



// single parameter
const value = (a) => a * 5
console.log(value(5));

// multiple parameter
const value2 = (a, b) => a * b
console.log(value2(5, 10));


// multiple arrow function
const value3 = (x, y) => {
    const sum = x + y
    const diff = x - y
    const result = sum * diff
    return result
}

const totalResult = value3(10, 5)
console.log('totalResult = ' + totalResult);


// IIFE
(summation = () => {
    // local variable
    var a, b;
    a = 10, b = 20
    sum = a + b
    console.log(sum);
})();



const multi = (num) => num * num
// const arr = [1, 2, 3, 4, 5]
console.log(multi(4));
console.log(multi(10));




