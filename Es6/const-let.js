/*
const মানে কন্সট্যান্ট, যার ভ্যালু চেঞ্জ করা যায় না।
 তাই আপনি কোনোকিছু একবার const দিয়ে ডিক্লেয়ার করলে সেটার পরে আর পরিবর্তন করতে পারবেন না।
 kintu array and object use kore amra kichu value change krthe pari kintu all value  change kora jabe na
 FULL VARIABLE TAKE replace kora jabe na
 */


// const number = [10, 20, 44, 55, 33, 66, 88]
// // console.log(number);
// FULL VARIABLE TAKE replace kora jabe na
// number.push(12);
// console.log(number);


// const nayok = {
//     nameOf: 'JAMAL',
//     age: 22
// }
// // FULL VARIABLE TAKE replace kora jabe na
// nayok.nameOf='kamal'
// console.log(nayok);



// scope er vaire gele error dekhabe, let dile lik hoi hahhaha and var scrope baire use kora jai
// let changeable kintu lik hbe na
let sum = 0
for (let i = 0; i < 5; i++) {
    sum = sum + i
}

console.log(i);