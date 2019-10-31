/*jshint esversion: 6*/

//Variable scope

var name = 'Aragorn'; //Global

function x() {
	var name = 'Gimli'; //Local
	console.log(name);
}

x(); //Gimli
console.log(name); //Aragorn
x(); //Gimli
y(); //Aragorn
function y() {
	name = 'Legolas'; // Changes the global value of name to 'Legolas' in the absence of the keyword var 
	console.log(name);
}
console.log(name); //Legolas
