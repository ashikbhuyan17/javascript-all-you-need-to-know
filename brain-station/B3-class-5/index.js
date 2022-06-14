var a = 10
function print() {
    var a = 100;
    function print2() {
        a = 500
        console.log("print2", a);
    }
    print2()

    console.log("print1", a);
}
console.log("log", a);

print() 