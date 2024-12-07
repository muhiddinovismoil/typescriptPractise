class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    accountArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    accountArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
console.log(`Circle area =  ${circle.accountArea()}`);
const rectangle = new Rectangle(3, 4);
console.log(`Rectangle area = ${rectangle.accountArea()}`);
