/**
    An object is a collection of properties, and a property is an association between a name (or key) and a value.
    A property's value can be a function, in which case the property is known as a method.
 */

const person = { Name: 'jamal', age: 20, job: 'facebook', location: 'dhaka', friends: { Name: 'kamal', age: 33 } }

// Destructure => kono ekta array or object theke  kono one or multiple element ke  variable rakar shortcut upay
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


// destructure complex object
const complex = {
    Nameof: 'jamal',
    info: {
        address: 'dhaka'
    }
}

const { address } = complex.info //address ta variable hisebe ace ekane
console.log(address);