// // with temp swap
var a = 10
var b = 20
var temp
temp = a
a = b
b = temp

console.log('a is : ', a)
console.log('b is ', b)
console.log('tempis ', temp)

// without temp swap
var x = 10
var y = 20
x = x + y
y = x - y
console.log(y)
x = x - y
console.log(x)

// destructing
var p = 10;
var q = 50;
[p, q] = [q, p]
console.log('after swap p =', p ,'q =',q)

