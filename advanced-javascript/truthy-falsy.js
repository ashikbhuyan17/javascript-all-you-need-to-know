// Truthy and Falsy values
/**
 All values are truthy unless they are defined
 as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN)
 and truthy value (true,' ',//,[],)
 */


// const nameOf = 0;
// let nameOf = null;
const nameOf = ""
if (nameOf > 0) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

// if (nameOf.length > 0) {
//     console.log('condition is true');
// } else {
//     console.log('condition is false');
// }


// undefined => variable value not declared
let age;
console.log(age);



// Truthy
const ages = 12
if (ages || ages == 0) {
    console.log('condition is true');
} else {
    console.log('condition is false');
} 