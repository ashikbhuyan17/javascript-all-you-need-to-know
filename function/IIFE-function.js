// function summation(){
//     // local variable
//     var a,b;
//     a=10,b=20
//     sum = a+b
//     console.log(sum);
// }
// summation()

/** 
An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, 
 as soon as they are created.IIFEs are very useful because they don't pollute the global object, 
 * and they are a simple way to isolate variables declarations.
 */

(function summation() {
    // local variable
    var a, b;
    a = 10, b = 20
    sum = a + b
    console.log(sum);
})();