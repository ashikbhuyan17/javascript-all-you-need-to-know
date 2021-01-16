//check if the number is even
var number = 10
if (number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}

// Grading system
var grade = 55

if (grade > 90) {
    console.log('Grade - A')
}
else if (grade <= 90 && grade > 85) {
    console.log('Grade - A-')
}
else if (grade <= 85 && grade > 70) {
    console.log('Grade - b')
}
else if (grade <= 70 && grade > 50) {
    console.log('Grade - b+')
}

else if (grade >= 50 && grade > 40) {
    console.log('Grade - pass')
}
else {
    console.log('fail')

}