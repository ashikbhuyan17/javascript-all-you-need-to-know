const loggerData = require('./logger') //exports er value soman

// destructuring
const { log, user, user1, human } = require('./logger')
// log("start")
loggerData.user("jamal", "bhuyan")

console.log("...", loggerData);
// console.log(loggerData.log);
// console.log(loggerData.user1);
// loggerData.user1("jamal", "bhuyan")


// human
// human("kamal",20)
// loggerData.human("yeass",55)
