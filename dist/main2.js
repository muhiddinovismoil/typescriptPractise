class Vehicle {
    model;
    constructor(model) {
        this.model = model;
    }
}
class Car extends Vehicle {
    constructor(model) {
        super(model);
    }
    start() {
        console.log(`${this.model} car's engine started ...`);
    }
    stop() {
        console.log(`${this.model} car's engine stopped ...`);
    }
}
class Motorcycle extends Vehicle {
    constructor(model) {
        super(model);
    }
    start() {
        console.log(`${this.model} motorcycle's engine started ...`);
    }
    stop() {
        console.log(`${this.model} motorcycle's engine stopped ...`);
    }
}
const newCar = new Car("Porsche 911 GT Turbo");
newCar.start();
newCar.stop();
const newMotorcyle = new Motorcycle("Ducatti");
newMotorcyle.start();
newMotorcyle.stop();