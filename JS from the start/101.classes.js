/// Classes (JS still uses prototypes)

class Vehicle {
	constructor(_wheels) {
		this.numWheels = _wheels;
	}
	get wheels() {
		return this.numWheels;
	}
	set wheels(_wheels) {
		this.numWheels = _wheels;
	}
	static accelerate() {
		console.log('go faster');
	}
	static decelerate() {
		console.log('go slower');
	}
	justAMethod() {
		//like a function
		console.log('justAMethod');
	}

};

let car = new Vehicle(4);
console.log(car.numWheels);
let car1 = new Vehicle(6);
console.log(car1);
Vehicle.accelerate();
// car1.justAMethod();

class Car extends Vehicle { //Car from prototype Vehicle
	constructor(_wheels, _make, _model, _year) {// _ convention to say its local
		super(_wheels);
		this.make = _make;
		this.model = _model;
		this.year = _year;
	}
	info() {
		console.log('The', this.make, this.model, 'was made on', this.year, 'and has', this.wheels, 'wheels');
	}
}

let ferrari = new Car(8, 'Ferrari', 'Testarrosa', 1985);
console.log(ferrari);
ferrari.info();
Car.accelerate();
Car.accelerate();

