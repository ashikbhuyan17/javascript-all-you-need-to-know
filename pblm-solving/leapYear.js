// let year = 2000
// if(year%400==0){
//     console.log(year +" is a leap year")
// }
// else if(year%4==0 && year%100!=0){
//     console.log(year +" is leap year")
// }
// else{
//     console.log(year +" is not leap year")
// }


function isLeapYear(year) {
    if (year % 400 == 0) {
        return true
    }
    else if (year % 4 == 0 && year % 100 != 0) {
        return true
    }
    else{
        return false
    }
}

let is2000LeapYear = isLeapYear(2000)
console.log(is2000LeapYear)
var is1990LeapYear = isLeapYear(1990)
console.log(is1990LeapYear)