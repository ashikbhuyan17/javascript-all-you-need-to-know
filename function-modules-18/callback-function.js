
/* কলব্যাক ফাংশনের মানে এক কথায় এটা এমন একটা ফাংশন যেটা আরেকটা ফাংশন এক্সিকিউট হওয়ার পর এক্সিকিউট হয়।
 আর এজন্যেই এটার নাম কলব্যাক ফাংশন।
 
//  koono ekta function already execute hoiye ace kintu abar jkn oi function take perameter akare pass krbo
    bha jekono jaigay call dbo oitay tkn callback function */



function forCallback(name, age, task) {
    console.log('name : ' + name);
    console.log('age : ' + age);
    // callback function
    // washHand()
    // takeShower()

    task();

}


function washHand() {
    console.log('wash hand with shap');
}
function takeShower() {
    console.log('take Shower');
}

forCallback('ashik', 21, washHand)
forCallback('jamal', 21, takeShower)
