let myObj = function (nm) {
	this.name = nm;
	//when used with 'new' it will return an instance
};

myObj.prototype.capitalize = function () {
	this.name = this.name.substring(0, 1).toUpperCase() + this.name.substring(1);
	return this;
};

myObj.prototype.upper = function () {
	this.name = this.name.toUpperCase();
	return this;
};

myObj.prototype.getName = function () {
	console.log(this.name);
};

let bob = new myObj('bob');
let cole = new myObj('cole');

let x = bob.getName();
console.log(x); //undefined; the function doesn't return anything
cole.getName();

bob.capitalize().upper().getName();
cole.capitalize().getName();

let arr = ['Cole', 'Cara', 'Bree', 'Riley', 'Ales', 'Devon'];
let x2 = arr.sort(); //remember that non primitives are passed by reference and, therefore, changed
console.log(arr);

arr.sort().forEach(item => {
	console.log(item);
});