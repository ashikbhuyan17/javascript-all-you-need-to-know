let start = new Date()
let sum = 0
for (let i = 0; i < 1000000000; i++) {
    sum++;
}
let end = new Date()
console.log('timezone ', end - start);