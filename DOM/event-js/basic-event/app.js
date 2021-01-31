var btn = document.querySelector('button')

//  not recommended
// btn.onclick = function () {
//     alert('hello');
// }
// btn.onclick = function () {
//     console.log('hi');
// }


/*
Syntax
document.addEventListener(event, function, useCapture) */

btn.addEventListener('click', function () {
    alert('hello');
    console.log('i am a simple txt');
})