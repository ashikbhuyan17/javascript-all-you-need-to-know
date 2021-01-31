/* Arguments are Passed by Value The parameters, in a function call, are the function's arguments.
 JavaScript arguments are passed by value: The function only gets to know the values,
  not the argument's locations. If a function changes an argument's value,
   it does not change the parameter's original value.
*/




// Arguments are values passed to the function when it is invoked.
//  Arguments are not a array . it is an array like object .



// function addNumbers(num1,num2){
//     return num1 + num2
// }

// // ekane 4 ta argument patanu hocce tobe perameter ace 2ta tay 2ta value summation akare return krce
// var result = addNumbers(19,11,22,44)
// console.log(result);






/*
// ekane 4 ta argument patanu hocce tobe perameter ace 2ta tay 2ta value
 summation akare return krce ey somossa takhe mukti pawar jonno amra argument use kory

 */

function addNumbers(num1, num2) {
    let summation = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        // console.log(element);
        summation = summation + element
        console.log(summation);
    }
    return summation
}


var result = addNumbers(19, 11, 22, 44)
console.log('summation is : ' + result);




// 

// function userName(firstName) {

//     console.log(arguments);
//     let fullName = '';
//     for (let i = 0; i < arguments.length; i++) {
//         const namePart = arguments[i];
//         fullName = fullName + ' ' + namePart
//     }
//     return fullName


// }

// const nameOf = userName('hanif', 'sonkhet', 'poribohon','subokta')
// console.log(nameOf);


// convert  array to arguments
function userName(firstName) {
    console.log(arguments);
    const result = [...arguments].join(' ')
    return result
    // let fullName = '';
    // for (let i = 0; i < arguments.length; i++) {
    //     const namePart = arguments[i];
    //     fullName = fullName + ' ' + namePart
    // }
    // return fullName


}

const nameOf = userName('hanif', 'sonkhet', 'poribohon', 'subokta')
console.log(nameOf);