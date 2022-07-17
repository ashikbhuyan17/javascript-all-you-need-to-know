console.log("try")
function person(name, gender, callback) {
    console.log("name=" + name + " gender=" + gender);
    callback()
}

function callback() {
    console.log("this is callback function");
}

person("rana", "male", callback)