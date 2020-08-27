// strict mode vs sloppy mode

"use strict";

// function f(){
// 	"use strict";
// }

//neverDeclared = 123; //Reference

// var NaN = 123; //TypeError in the browser
// var undefined = 123

//Silent failure; doesn't do what you want but doesn't throw an error either
let obj = {
	a: 123,
	b: 0,
	get x() {
		return this.a;
	},
	// set x(_x) {
	// 	this.b = _x;
	// }
};
//obj.x = 47;
console.log(obj.x); // 123; cannot do that without the setter (error thrown on strict mode)

Object.defineProperty(obj, 'c', {
	value: 456,
	writable: false
});
//obj.c = 789; same (silent failure on normal mode; error on strict)
console.log(obj.c);

Object.seal(obj); //.freeze() .preventExtensions()
//delete obj.c; // same

// function dup(a, b, c, a) {// a thrown ("a" already declared)	
// }

function f1() { }
function f1(a, b) { } //Allowed in either mode (overwriting the previous function)

var f1 = function () { };
f1 = function (a, b) { }; //Same

let f2 = function () { };
f2 = function (a, b) { }; //With let you can reassign but not redeclare


