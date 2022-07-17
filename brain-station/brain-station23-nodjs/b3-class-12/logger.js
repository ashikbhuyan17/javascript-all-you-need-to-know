function log(txt) {
    console.log("log : ",txt);
}
// console.log(exports)
// console.log(module)

function user1(x, y) {
    let user = {
        firstName: x,
        lastName: y
    }
    console.log("user1 details", user);
}


function user(x, y) {
    let user = {
        firstName: x,
        lastName: y
    }
    console.log("user details", user);
}


// direct exports
exports.human = (humanName,age)=>{
    let humanData = {
        humanName: humanName,
        age: age
    }
    console.log("Human info", humanData);
}


exports.log = log
exports.user = user
exports.user1 = user1

