/**
 javaScript single thread language also non-blocking i/o => Asynchronous
synchronous  : first operation complete howar por second operation start korbe.....
Asynchronous : first operation complete hoiye glo kintu second operation jonno 5s time lagbe kintu
tkn Asynchronous  3rd,4th... line execute kore dve or opeation complete kore dve , maimly opekha krbe na
 */

//  Asynchronous
console.log('this is first line')
setTimeout(() => {
    console.log('this is second line')
}, 3000);
setTimeout(() => {
    console.log('this is third line')
}, 2000);
console.log('this is four line')
console.log('this is fifth line')
