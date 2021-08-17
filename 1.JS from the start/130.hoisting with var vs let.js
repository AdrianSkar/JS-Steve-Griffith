
console.log(v1); //undefined (hoisted)
var v1;

f();//works; hoisted the whole function
// fe();//Error; fe is not a function (just the variable got hoisted)
console.log(fe);

// console.log(l1); //Ref error: cannot access before initialization (TDZ; temporal dead zone)
let l1; //undefined is assigned at this line
console.log(l1);

function f() {
	// function declaration; hoisted to the top
	console.log('function f');
	x = 'hello'; //gets declared as var outside by the engine so it doesn't have block scope but global scope
	// use let x; instead
}
console.log(f());
console.log(x);

var fe = function e() { console.log('fe'); };
fe();





