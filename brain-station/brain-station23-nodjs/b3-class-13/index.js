// Import events module
const EvenEmitter = require('events')
 // Create an evenEmitter object
const evenEmitter = new EvenEmitter()
// evenEmitter ekata object jar on name ekta method ace 
// download complete hole ekta function trigger hbe  
// complete name ekta event create kora hoice
evenEmitter.on('complete',function (){
    console.log("download completed");
})

evenEmitter.on('finish',function (){
    console.log("Installation finished");
})

// event trigger
// Fire an event
evenEmitter.emit('complete')