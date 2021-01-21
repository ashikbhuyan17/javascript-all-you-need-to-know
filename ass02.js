   
//   kelometer to meter start 
   function kelometerToMeter(km)
    {
        //if kelometer is less than 0 than this function will return 0;
        if(km>0)
        {
            return km*100;

        }
        else {
            return 0;
        }
        
    }

    var kelometer = 999;
    var meter = kelometerToMeter(kelometer);
    console.log("meter = " + meter); 


//budget Calculator start
    function budgetCalculator(totalWatch, totalPhone, totalLaptop)
    {
        //if you will input negative valu than program will set this valu zero.
        if(totalWatch<0)
        {
            totalWatch=0;
        }
        if(totalPhone<0)
        {
            totalPhone=0
        }
        if(totalLaptop<0)
        {
            totalLaptop=0;
        }

        // if any input is floor that it will make floor value.
        totalWatch = Math.floor(totalWatch);
        totalPhone = Math.floor(totalPhone);
        totalLaptop = Math.floor(totalLaptop);

        var totalPrice= ((totalWatch*50)+(totalPhone*100)+(totalLaptop*500));
        
        return totalPrice ;
    }

   var watch = -2;
   var phone = 3;
   var laptop = 1;

   total_budget = budgetCalculator(watch, phone, laptop);
   console.log("Total Budget = "+total_budget);


//hotel cost start
function hotelCost(totalDay)
{
    totalDay = Math.ceil(totalDay);
    //here i use ceil because when a man lives here half of a day than it will calculate full days charge.
  var cost=0;
  if( totalDay<=10 && totalDay>0)
  {
      cost = totalDay*100;
      return cost;
  }
  else if(totalDay>10 && totalDay<=20)
  {
      cost = (10*100)+((totalDay-10)*80);
      return cost;
  }
  else{
    cost = (10*100)+(10*80)+((totalDay-20)*50);
    return cost;

  }

}
var day = 22;
var totalCost = hotelCost(day);
console.log("Total Cost = "+totalCost);




// mega friend strat 
function megaFriend(fName){

    var maxName,max=0;

    for(var i = 0; i<fName.length;i++)
    {
         if(max<fName[i].length)
         {
            maxName = i;

         }
    }

    return fName[maxName];

}
var friendName = ["sowmik","ahsanul","Ratul","Jahid Bin Jahanggir Hasan Jahid"];
var biggestName = megaFriend(friendName);
console.log("Biggest Name = "+biggestName);