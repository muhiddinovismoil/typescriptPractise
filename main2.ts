abstract class Vehicle {
    model: string;
    constructor(model: string) {
        this.model = model;
    }
    abstract start(): void;
    abstract stop(): void;
}
class Car extends Vehicle {
    constructor(model: string) {
        super(model);
    }
    start(): void {
        console.log(`${this.model} car's engine started ...`);
    }
    stop(): void {
        console.log(`${this.model} car's engine stopped ...`);
    }
}
class Motorcycle extends Vehicle {
    constructor(model: string) {
        super(model);
    }
    start(): void {
        console.log(`${this.model} motorcycle's engine started ...`);
    }
    stop(): void {
        console.log(`${this.model} motorcycle's engine stopped ...`);
    }
}
const newCar = new Car("Porsche 911 GT Turbo");
newCar.start();
newCar.stop();
const newMotorcyle = new Motorcycle("Ducatti");
newMotorcyle.start();
newMotorcyle.stop();
