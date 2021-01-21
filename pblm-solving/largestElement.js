var marks = [20,44,33,10,66,65,77,87,90]
var max=min= marks[0]
for(var i=0; i< marks.length;i++){
    if(max < marks[i]){
        max = marks[i]  
    }
    if(min > marks[i]){
        min = marks[i]  
    }

}
console.log(max)
console.log(min)
