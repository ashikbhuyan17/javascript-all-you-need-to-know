const friends = ['salam', 'jamal', 'rahim', 'karim']
// console.log(friends);
const [firstName, nextName, ...restFriend] = friends
console.log(firstName, nextName);
console.log(...restFriend);
