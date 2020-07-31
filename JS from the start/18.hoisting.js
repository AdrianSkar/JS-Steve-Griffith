//Hoisting; the process of taking two passes through the js file_exists
//first pass hoists all the declarations to the top of the file 

var a; //just declaring
var b = 4; // declaring and assigning a value
console.log(d); //undefined; it knows it exists but hasn't been assigned any value yet

function c() {
	//function declaration, gets hoisted with all its content
}

var d = 5;
var e = function () {
	//function expression, doesn't get hoisted as this function isn't assigned to the variable until this line
};
