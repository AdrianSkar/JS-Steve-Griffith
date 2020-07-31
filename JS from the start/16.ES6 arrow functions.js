// ES6 (fat) arrow functions
// work best in callback function scenarios
// parentheses around input if more than one parameter
// curly braces around function body if more than one line/command
// return only needed if more than one line of code

let numbers = [123, 234, 345, 456, 567];
let names = ['Alex', 'Bree', 'Cara', 'Cole', 'Devon', 'Riley'];

//simple function syntax
//create a new array of the values from the array greater than 300
let big = numbers.filter(function (item) {
	return item > 300;
});

//arrow function version
let bigA = numbers.filter(item => item > 300);

console.log(big);
console.log(bigA);

names.forEach(function (item, index) {
	console.log(index, item);
});

names.forEach((item, index) => console.log(index, item));

