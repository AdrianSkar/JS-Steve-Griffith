/*jshint esversion: 6*/

// In JS, functions are first-class objects, just like String, Number, Boolean
// This means that they can be passed to functions or returned from functions

// function x(a) {
// 	//a can contain any type, including another function
// 	console.log('x');

// 	a(); // will execute function y
// 	return a;
// }

// function y() {
// 	console.log('y');
// }

// let b = x(y); //calling function x
// b();

function greet(msg) {
	//console.log(msg);

	return function (name) {
		console.log(msg, name);
		//console.log('Hi', name)
	};
}

let english = greet('Hi'); //The return element becomes the inner function you can use to pass the name.
english('Tom');

let svenska = greet('Hej');
let español = greet('Hola');
let deutsch = greet('Tag');

svenska('Sven');
español('Carlos');
deutsch('Mattias');

