
let myObj = {}; // new Object()
console.log(myObj.constructor);// function Object(){}
console.log(myObj.__proto__ === myObj.constructor.prototype);
//__proto__ is not recommended; use get/setPrototypeOf

console.log(Object.getPrototypeOf(myObj));

function Cat() {
	//constructor for kitty 
}
console.log(Cat.prototype);
let kitty = new Cat();
console.log(Object.getPrototypeOf(kitty) === Cat.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(kitty)) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

function Animal() { }


// Object.setPrototypeOf(Cat, Animal); // This won't work as Cat and Animal are functions and objects must be passed to work properly; you must point to the prototype object
// console.log(Object.getPrototypeOf(Cat));

Object.setPrototypeOf(Cat.prototype, Animal.prototype);
console.log(Object.getPrototypeOf(Cat.prototype));

console.log(Object.getPrototypeOf(kitty));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(kitty)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(kitty))));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(kitty)))));