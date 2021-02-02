
// Sending Data/Storing data: (convert the object into JSON) => JSON.stringify()
// If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:
var myObj = { name: "John", age: 31, city: "New York" };
var myJSON = JSON.stringify(myObj);
console.log(myJSON);

// Receiving Data (convert the JSON into object) => JSON.parse()
// If you receive data in JSON format, you can convert it into a JavaScript object:
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
console.log(myObj);