const normalPerson = {
    firstName: 'jamal',
    lastName: 'bhuiyan',
    salary: 15000,
    // anonymous  function without name
    getFullName: function () {
        console.log(this.firstName, this.lastName)
    },

    chargeBil: function (amount) {
        this.salary = this.salary - amount
        return this.salary
    }
}

console.log(normalPerson.getFullName)
console.log(normalPerson.chargeBil(5000));

console.log(normalPerson.salary);