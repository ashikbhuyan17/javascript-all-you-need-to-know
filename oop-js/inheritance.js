class Bicycle {

    constructor(gear, speed) {
        this.gear = 10;
        this.speed = 66;
    }
}


// let bicycle = new Bicycle(1, 2)
// console.log(bicycle);

class Road_bike extends Bicycle {
    constructor(setHeight) {
        super();
        this.setHeight = setHeight
    }

    totalValue() {
        return this.gear + this.speed + this.setHeight
    }
}

const rb = new Road_bike(10)
console.log(rb.totalValue());