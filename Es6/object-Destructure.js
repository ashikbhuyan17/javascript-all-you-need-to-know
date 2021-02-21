/**
    An object is a collection of properties, and a property is an association between a name (or key) and a value.
    A property's value can be a function, in which case the property is known as a method.
 */

const person = { Name: 'jamal', age: 20, job: 'facebook', location: 'dhaka', friends: { Name: 'kamal', age: 33 } }

// Destructuring => kono ekta array or object theke  kono one or multiple element ke  variable rakar shortcut upay
// person object er bitor takhe name and age property niye asa hoiyeche
// multiple property niye asar jonno  
const { Name, age } = person

//  const Name = person.Name
//  const age = person.age
console.log(Name, age);
console.log(Name, age);
console.log(Name, age);
console.log(Name, age);

console.log(person.friends.Name, person.friends.age);


// destructuring complex object
const complex = {
    Nameof: 'jamal',
    info: {
        address: 'dhaka'
    }
}

const { address } = complex.info //address ta variable hisebe ace ekane
console.log(address);




// object
const zonayedObj = {
    nameObj: 'Zonayed Ahmed',
    ageObj: 21,
    professionObj: 'Student'
};

// Es5
// var nameObj5 = zonayedObj.nameObj;
// var ageObj5 = zonayedObj.ageObj;
// var professionObj5 = zonayedObj.professionObj;

const { nameObj, ageObj, professionObj } = zonayedObj;
console.log("obj : ", nameObj, ageObj, professionObj);

// or
var comObj = {
    anotherObj: {
        anotherNewObj: {
            title: 'JavaScript ES6'
        }
    },
    ages: 30,
};

// normal way
// const titleOf = comObj.anotherObj.anotherNewObj.title
// console.log(titleOf);

// destructuring way
const { anotherObj: { anotherNewObj: { title: newTitle } }, ages } = comObj
console.log(newTitle, age);


const comObj2 = {
    anotherObj: {
        title: 'JavaScript ES6',
        age: 40,
        location: 'dhaka'
    },
    ages: 30,
};
const { anotherObj } = comObj2
console.log("anotherObject ", anotherObj);
const { anotherObj: { location } } = comObj2
console.log("findLocation : ", location);
const { title } = comObj2.anotherObj
console.log("title :", title); 
