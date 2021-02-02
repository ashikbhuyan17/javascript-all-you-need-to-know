// slice = > start index and end index
const numbers = [10, 3, 4, 5, 11, 22]
console.log(numbers.slice(1, 4));
console.log(numbers);


//  splice => here 2 start value and 3 (means 3ta value delete hbe)  and original array theke value gula ber kore flbe
// 12,16 value injent krce mane delete howa jaigay add hbe
const number2 = [10, 3, 4, 5, 11, 22]
const remove = number2.splice(2, 3, 12, 16)
console.log('splice :', remove);
console.log(number2);



// array join elements
const number3 = [10, 3, 4, 5, 11, 22]
const joinElement = number3.join(" ")
console.log('join : ', joinElement);


