// const car={
//   brand:'Fork',
//   color: 'red',
//   maxSpeed: 200,
//   chassisNumber: 'f-1',
//   //methods
//   drive: () => {
//     console.log('driving');
//   },
//   reverse: () => {
//     console.log('reversing');
//   },
//   turn: () => {
//     console.log('turning');
//   }
// }
// console.log(car.brand);
// console.log(car.color);
// console.log(car.maxSpeed);
// console.log(car.chassisNumber);
// car.drive();
// car.reverse();
// car.turn();

//constructor fungction
// function Car(brand, color, maxSpeed, chassisNumber) {
//   this.brand = brand;
//   this.color = color;
//   this.maxSpeed = maxSpeed;
//   this.chassisNumber = chassisNumber;
// }

// Car.prototype.drive = function () {
//   console.log(`${this.brand} ${this.color} is driving`);
// }

// Car.prototype.reserve = function () {
//   console.log(`${this.brand} ${this.color} is reversing`);
// }

// Car.prototype.turn = function () {
//   console.log(`${this.brand} ${this.color} is turning`);
// }


// const Toyota = new Car('Raize', 'Black',1000,'to-2')
// const Honda = new Car('HRV', 'Red', 1500, 'to-3')
// const Hyndai = new Car('Cereta', 'White', 1500, 'to-4')

// console.log(Toyota)
// console.log(Honda)
// console.log(Hyndai)

class Car{
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxspeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
}

const Raize = new Car('Toyoya', 'Black', 1500, 'AC321');
const HRV = new Car('Honda', 'Red', 1500, "32DF3");

console.log(Raize)
console.log(HRV)
HRV.turn();
