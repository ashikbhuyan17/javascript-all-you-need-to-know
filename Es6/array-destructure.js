const friends = ['salam', 'jamal', 'rahim', 'karim']
// console.log(friends);
const [firstName, nextName, ...restFriend] = friends
console.log(firstName, nextName);
console.log(...restFriend);


// এই ডি-স্ট্রাকচারিং এর মূল কাজ হচ্ছে একটা ডাটা স্ট্রাকচার যেমন অ্যারে বা অবজেক্ট এর মতো ডাটা স্ট্রাকচার থেকে ডাটা আলাদা আলাদা করে বের করে আনা।
const zonayed = ['Zonayed Ahmed', 21, 'Student'];
var name = zonayed[0];
var age = zonayed[1];
var profession = zonayed[2];
console.log(name, age, profession);   //Es5


const zonayed2 = ['Zonayed Ahmed', 21, 'Student'];
const [name6, age6, profession6] = zonayed
console.log(name6, age6, profession6);   //Es6


