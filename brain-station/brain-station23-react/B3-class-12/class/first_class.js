class User {
    constructor(x, y) {
        this.firstName = x;
        this.lastName = y;
    }
    print() {
        console.log(this.firstName, ' ', this.lastName)
    }
}
const userSuper = new User('kamal', 'bhuiyan')
userSuper.print()


// const user = {
//     firstName: 'ashik',
//     lastName: 'bhuyan',
//     print: () => {
//         // console.log(this.firstName, ' ', this.lastName)
//         console.log(user.firstName, ' ', user.lastName)
//     }
// }
// user.print()