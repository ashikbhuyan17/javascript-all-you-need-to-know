var speech = 'hi  i am ashik bhuyan'
var count=0
for(var i=0;i<speech.length;i++){
    var element = speech[i]
    console.log(element)
    if(element == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count)