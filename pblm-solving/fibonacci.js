
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

let fibo = [0,1]
for(let i=2;i<10;i++){
    fibo[i] = fibo[i-1]+fibo[i-2]
    console.log(fibo[i])
}