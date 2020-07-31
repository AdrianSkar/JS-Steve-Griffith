// Using "new" with functions
// new does 4 things:
// new object created;
// new object is prototype linked;
// new object set as "this" binding;
// if no return statement exists then a copy of the object is returned.

function Car(make, model) {
	// console.log(this);
	this.props = {
		make,
		model
	};
	this.info = function () {
		return this.props;
	};

}

Car.prototype.info2 = function () {
	return this.props;
};

let c1 = Car('Honda', 'Accord');
let c2 = new Car('Tesla', 'Model 3');

// console.log(c1.props);
console.log(c2.info2());
console.log(c2.info());


