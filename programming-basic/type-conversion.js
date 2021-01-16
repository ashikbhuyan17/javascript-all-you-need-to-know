//  integer float parseInt parseFloat type conversion (parseint => parseInt/parseFloat)

// parseInt
var Number1 = "35";
var Number2 = 49;
var summation = parseInt(Number1) + Number2;
console.log('summation is = ' + summation)


// parseFloat

var Number1 = 60.66
var Number2 = "35.99"
Number1 = parseFloat(Number1)
var summation = Number1 + parseFloat(Number2)
console.log('summation is = ' + summation)


// convert number to string
var Number1 = 60.66;
var Number2 = "35.66";
// +Number2 means automatically number e convert hbe 
Number2 = +Number2;
var summation = Number1 + Number2;
console.log('summation is = ' + summation)

const a = '4';
const b = -a;
console.log(typeof b);

// convert string TO number
// ''+Number1 => kono ekta empty sathe jody number summation koro thle oi numberta string e convert hoiye jave
var Number1 = 200;
var Number2 = 300;
Number1 = '' + Number1;
console.log('datatype : ' + typeof (Number1) + '   And the number1 is = ' + Number1)
// or
var Number1 = 200;
console.log(Number1.toString())
console.log('convert string TO number ' + typeof( Number1.toString() ) + Number1 )





// float decimal places
var Number1 = 0.1;
var Number2 = 0.2;
var summation = Number1 + Number2;
summation = summation.toFixed(3);
console.log('summation is = ' + summation)