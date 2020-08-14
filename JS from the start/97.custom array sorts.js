let movies = ['Star trek', 'Star wars', 'Jaws', 'Jurassic park', 'Memento', 'The matrix'];

let numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283];

let people = [
	{ 'id': 123, 'name': 'Rick Decard', 'email': 'rick@bladerunner.com' },
	{ 'id': 456, 'name': 'Roy Batty', 'email': 'roy@replicant.io' },
	{ 'id': 789, 'name': 'J.F.Sebastian', 'email': 'j.f@tyler.com' },
	{ 'id': 258, 'name': 'Pris', 'email': 'pris@replicant.io' }
];

// problem with numbers
console.log(movies.sort());
console.log(numbers.sort());

// solution - custom sort
let sortedNum = numbers.sort((a, b) => {
	if (a > b) { return 1; }
	else if (b > a) { return -1; }
	else return 0; // or return a - b; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
});

console.log(sortedNum);

// sort people by person name

let sortedPeople = people.sort((a, b) => {
	if (a.name > b.name) { return 1; }
	else if (b.name > a.name) { return -1; }
	return 0;
	// return a.name - b.name; // this won't work as with numbers (can't subtract)
});

console.log(sortedPeople);