student1 = { id: 133, age: 22, name: 'ashik' }
student2 = { id: 13, age: 27, name: 'bhuyan' }
console.log(student1)
console.log(student2)
// 1st step
console.log(student1.id)

// 2nd step =-> property diye call dte hoi bt array te indec diye call dte hoi
var ages = student2["age"]
console.log(ages)

// 3rd steps

var nameofstudent2 ="name" 
var nameNo = student2[nameofstudent2]
console.log('nameNo : ' +nameNo)



// set value
student3 = { id: 13, age: 27, name: 'bhuyan' }
student3.id = 333
console.log('updat id : ' +student3.id)
student3["age"] = 55
console.log('updat age : ' +student3.age)
var names = student3["name"]
names= "jamal"  
console.log('updat name : ' +names)

