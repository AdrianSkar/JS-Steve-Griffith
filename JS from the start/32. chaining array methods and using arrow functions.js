/*jshint esversion: 6*/

// Arrays of objects
// Efficiently combining and chaining array methods and arrow functions
// person.email.indexOf('@replicant.io') > -1
// Find the names of all the people who have "replicant.io" emails

const people = [
	{ 'id': 123, 'name': 'Rick Decard', 'email': 'rick@bladerunner.org' },
	{ 'id': 456, 'name': 'Roy Batty', 'email': 'roy@replicant.io' },
	{ 'id': 789, 'name': 'J.F.Sebatian', 'email': 'j.f@tyler.com' },
	{ 'id': 258, 'name': 'Pris', 'email': 'pris@replicant.io' }
];

//Two step version

let replicants = people.filter(function (person) {
	return person.email.indexOf('@replicant.io') > -1;
});
console.log(replicants);

let names = replicants.map(function (val) {
	return val.name;
});
console.log('List of replicant names:', names);

//chain the two steps 
let replicantNames = people.filter(function (person) {
	return person.email.indexOf('@replicant.io') > -1;
}).map(function (val) { return val.name; });
console.log('List of replicant names:', replicantNames);

//arrow function version
let rn = people.filter(person => person.email.indexOf("replicant.io") > -1).map(val => val.name);
console.log('List of replicant names:', rn);


