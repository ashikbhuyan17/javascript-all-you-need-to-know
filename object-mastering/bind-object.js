/**
 The bind() method creates a new function, when invoked, has this sets to a provided value.
The bind() method allows an object to borrow a method from another object without making a copy of that method.
This is known as function borrowing in JavaScript.
 */

const normalPerson = {
    firstName: 'jamal',
    lastName: 'bhuiyan',
    salary: 15000,
    // anonymous  function without name
    getFullName: function () {
        console.log(this.firstName, this.lastName)
    },

    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount
        return this.salary
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'bhuiyan',
    salary: 25000,
    age: 33
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'alam',
    salary: 35000,
}

const heroChargeBil = normalPerson.chargeBill.bind(heroPerson)
heroChargeBil(2000);
heroChargeBil(3000);
console.log(heroPerson.salary);

// console.log(heroChargeBil);