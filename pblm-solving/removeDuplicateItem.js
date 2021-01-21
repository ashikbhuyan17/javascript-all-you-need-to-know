var duplicate= [10,20,30,40,100,20,10]
var unique=[]
for(var i=0;i<duplicate.length;i++){
    var element = duplicate[i]
    var index = unique.indexOf(element)
    if(index == -1){
        unique.push(element)
    }
}
console.log(unique)


