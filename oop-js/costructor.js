//  class name will be uppercase

class Main {
    // // create a constructor => constructor(parameters)
    constructor(a, b) {
        // this =>  related/called by current class
        this.a = a
        this.b = b
        this.sum = a + b
    }
}

//  create an object of Main => new className(arguments) 
// here, new is a keyword 
const firstSummation = new Main(20, 10)
const secondSummation = new Main(100, 10)

console.log(firstSummation);
// firstSummation is a object and a is value => objects.value
console.log('a = ' + firstSummation.a + '\nb = ' + firstSummation.b + '\nfirstSummation = ' + firstSummation.sum);
console.log('a = ' + secondSummation.a + '\nb = ' + secondSummation.b + '\nsecondSummation = ' + secondSummation.sum);


// class Meetup {
//     constructor(name, location) {
//       this.name = name;
//       this.location = location;
//     }
//     start() {
//       console.log(this.name + 'Meetup ' + 'is started at ' + this.location);
//     }
//   }
//   let jsMeetup = new Meetup('JS', 'Blr');
//   let ngMeetup = new Meetup('Angular', 'Noida');
//   jsMeetup.start(); //JSMeetup is started at Blr
//   ngMeetup.start(); //AngularMeetup is started at Noida