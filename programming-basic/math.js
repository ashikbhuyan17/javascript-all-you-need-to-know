
// Math absolute round floor ceil random


// absolute-Number
var number = -10;
console.log(number)
absoluteNumber=Math.abs(number)
console.log('absoluteNumber : ' + absoluteNumber)

// round
var number = 44.466;
result=Math.round(number)
console.log('Round result : ' + result)

// ceil => increase values nibe always
var number = 5.09999988;
result=Math.ceil(number)
console.log('celi result : ' + result)


// floor => decrease values nibe always
var number = 5.9999;
result=Math.floor(number)
console.log('Floor result : ' + result)

// random
var number = 5.9999;
result=Math.random(number)
console.log('Random result : ' + result)


// extra
console.log(Math.E)
console.log(Math.PI)
console.log(Math.max(400,300,100))
console.log(Math.min(400,300,100))
console.log(Math.pow(2,3))
console.log(Math.sqrt(9))

// random number jenator
console.log(Math.round(Math.random() * 50 + 1))
