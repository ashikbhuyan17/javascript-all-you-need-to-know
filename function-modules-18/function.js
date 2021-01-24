//  duplicate kaj take eksathe niye asar jonno function use kory
/* The first reason is reusability. Once a function is defined, 
it can be used over and over and over again. 
You can invoke the same function many times in your program, which saves you work. ...
 Another aspect of reusability is that a single function can be used in several
  different (and separate) programs. */


//   return => return krbo tknn jkn oi value niye ami porobothite kaj krbo

function evenify(num) {
    if (num % 2 == 0) {
        console.log(num + 'even numbers');
    }
    else {
        console.log(num * 2 + 'odd numbers');
    }
}

function evenify_all(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        const num = numArray[i];
        evenify(num);
    }
}

let numOf = [1, 33, 11, 22, 44, 66]
evenify_all(numOf)


let friendAge = [17, 33, 120, 22, 34, 66]
console.log(friendAge);
evenify_all(friendAge)





// // function callback korar somoy perametar name same hote  hbe


// let nums = [1, 33, 11, 22, 44, 66]
// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if (element % 2 == 0) {
//         console.log(element + 'even numbers');
//     }
//     else {
//         console.log(element * 2 + 'odd numbers');
//     }

// }



// let friendAge = [17, 33, 120, 22, 34, 66]

// for (let i = 0; i < friendAge.length; i++) {
//     const fAge = friendAge[i];
//     if (fAge % 2 == 0) {
//         console.log(fAge + 'even numbers');
//     }
//     else {
//         console.log(fAge * 2 + 'odd numbers');
//     }
// }





//   return => return krbo tknn jkn oi value niye ami porobothite kaj krbo

function returnFunction(num) {
    // if (num % 2 == 0) {
    //     return num
    // }
    // else {
    //     return num * 2 
    // }

    var result;
    if (num % 2 == 0) {
        result = num
    }
    else {
        result = num
    }
    return result
}

var results = returnFunction(30)
console.log(results);
var square = results * results
console.log(square);


