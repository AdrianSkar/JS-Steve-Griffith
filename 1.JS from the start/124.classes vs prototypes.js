//Creating objects with classes vs with prototypes

let PersonC = class {
	constructor(nm, id) {
		this.name = nm;
		this.id = id;
	}
	getDetails() {
		return `${this.name} :: ${this.id}`;
	}
};
let bob = new PersonC('Bob', 123);
console.log(bob);
console.log(bob.getDetails());

let EmployeeC = class extends PersonC {//Employee prototype links to PersonC prototype
	constructor(nm, id, salary) {
		super(nm, id);
		this.salary = salary;
	}
	getEmployeeInfo() { //exists on the prototype of EmployeeC
		return `${this.name} :: ${this.id} :: ${this.salary}`;
	}
};
let noomi = new EmployeeC('Noomi', 456, 85000000);
console.log(noomi.getEmployeeInfo());

////////////////////////////////////////////////////////////////////////////////

let PersonP = function (nm, id) {
	this.name = nm;
	this.id = id;
};
PersonP.prototype.getDetails = function () {
	return `${this.name} :: ${this.id}`;
};
let fred = new PersonP('Fred', 321);

console.log(fred.getDetails(), fred.name);

let EmployeeP = function (nm, id, salary) {
	PersonP.call(this, nm, id);
	// PersonP.apply(this, [nm, id]);
	this.salary = salary;
};
Object.setPrototypeOf(EmployeeP, PersonP); //extends
EmployeeP.prototype.getEmployeeInfo = function () {
	return `${this.name} :: ${this.id} :: ${this.salary}`;
};
let mary = new EmployeeP('Mary', 789, 650000);
console.log(mary.getEmployeeInfo());