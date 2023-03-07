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
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxspeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random()*1000)+1}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log(' you are not allowed to change the chassis number');
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

const Raize = new Car('Toyoya', 'Black', 1500);
const HRV = new Car('Honda', 'Red', 1500);
// HRV.chassisNumber = 'HRV-nan0';
// console.log(HRV.chassisNumber);
// console.log(Raize)
// console.log(HRV)
// HRV.turn();


//Getter and Setter
class User{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(fullName) {
    const [firstname, lastName] = fullName.split(' ');
    this.firstName = firstname;
    this.lastName = lastName;
  }
}

const user = new User("Bambang", "Pamungkas");
// console.log(user);
// console.log(user.fullName);

//Method lebih dalam

class CarMethod{
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }

  //Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

const car = new CarMethod("Honda","Blue",14000);

// console.log(car._chassisNumber)

//Member Visibility
class CarVisibility {
  #chassisNumber = null;
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxspeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }

  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
 
  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }

}

const carV = new CarVisibility();
carV.#chassisNumber = "tutor";
console.log(carV.chassisNumber);