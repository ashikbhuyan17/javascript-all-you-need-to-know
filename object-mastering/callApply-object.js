/**
 You can use call() / apply() to invoke the function immediately.
  bind() returns a bound function that, when executed later, will have the correct context ("this") 
  calling the original function. 
 */

const normalPerson = {
    firstName: 'jamal',
    lastName: 'bhuiyan',
    salary: 15000,
    // anonymous  function without name
    getFullName: function () {
        console.log(this.firstName, this.lastName)
    },

    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax
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

// call means , diye value patate hoi
// normalPerson.chargeBill.call(heroPerson, 900, 50, 50);
// normalPerson.chargeBill.call(heroPerson, 3100, 300, 30);
// console.log(heroPerson.salary);

// array akare value patate hbe
normalPerson.chargeBill.apply(heroPerson, [3100, 300, 30]);
console.log(heroPerson.salary);
