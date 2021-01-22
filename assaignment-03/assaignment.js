// kilometerToMeter 
function kilometerToMeter(kilometer) {
    var meter;
    // distance can not be negative
    if (kilometer < 0) {
        return "distance can not be negative"
    }
    else {
        meter = kilometer * 1000;
        return meter
    }
}
var result = kilometerToMeter(4)
console.log('Meter : ' + result)




// budgetCalculator 
function budgetCalculator(watch, phone, laptop) {

    //If you give a negative input value and this time the program will return Amount cannot be negative

    if (watch < 0) {
        return "Ammount cannot be negative";
    }
    if (phone < 0) {
        return "Ammount cannot be negative";
    }
    if (laptop < 0) {
        return "Ammount cannot be negative";
    }

    var ammountOfWatch = watch * 50;
    var ammountOfPhone = phone * 100;
    var ammountOfLaptop = laptop * 500;
    var totalAmmoun = (ammountOfWatch + ammountOfPhone + ammountOfLaptop)

    return totalAmmoun;
}
var numberOfWatch = 2;
var numberOfPhone = 3;
var numberOfLaptop = 2;


var resultOfBudget = budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop)
console.log('Total Budget : ' + resultOfBudget)






// hotelCost 
function hotelCost(totalDay) {
    var totalCost = 0;
    //If you give a negative input value and this time the program will return cost/Amount cannot be negative
    if (totalDay < 0) {
        return "cost/Ammount cannot be negative";
    }
    else if (totalDay <= 10 && totalDay > 0) {
        totalCost = totalDay * 100;
        return totalCost
    }
    else if (totalDay > 10 && totalDay <= 20) {
        totalCost = (10 * 100) + ((totalDay - 10) * 80);
        return totalCost
    }
    else {
        totalCost = (10 * 100) + (10 * 80) + ((totalDay - 20) * 50)
        return totalCost
    }

}
var totalDay = 16
var totalCost = hotelCost(totalDay)
console.log('Total Hotel cost = ' + totalCost)






// megaFriend(freiendsName)
function megaFriend(arr) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        var currentItem = arr[i]
        if (currentItem.length > result.length) {
            result = arr[i];
        }
    }
    return result;
}
var freiendsName = ["jamal ", "opu", "minhaj", "emon shah", "jannat"]
var largestName = megaFriend(freiendsName)
console.log('the largest string = ' + largestName)

