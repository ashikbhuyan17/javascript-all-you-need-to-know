// function declaration

function summation() {
  // local variable
  var a, b;
  a = 10, b = 20
  sum = a + b
  return sum
}
console.log('function declaration = ' + summation());


//  function expression
var x = function (y) {
  return y * y;
};
// let a = x(10)
console.log('function expression = ' + x(10));


// Immediately-invoked Function Expression (IIFE)
(function () {
  console.log('Code runs!')
})();


// named function expression
let math = {
  'factit': function factorial(n) {
    console.log('IIFE = ' + n)
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
};

math.factit(3) //3;2;1;



