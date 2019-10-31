/*jshint esversion: 6*/

// Array some()
// Wider availability than includes()
// functional approach like map, filter, and forEach
// returns Boolean when first positive match is found

const movies = ['Star wars', 'Star trek', 'Jaws', 'Jurassic park', 'Gross pointe blank', 'Eternal sunshine of the spotless mind', 'Memento', 'Dog soldiers', 'The host', 'Gran torino', 'Close encounters of the third kind', 'Good Will hunting', 'Layer cake', 'Casino royale', 'Almost famous'];

let keyword1 = 'Star';  // appears more than once
let keyword2 = 'cake'; // appears once 
let keyword3 = 'Max'; // not in list

let testA = movies.some(val => val === 'Star wars'); // works only with exact matches

console.log(testA);

let test1 = movies.some(function (title, index) {
	console.log(index, title);
	return title.indexOf(keyword1) > -1;
});
console.log(test1);

let test2 = movies.some(function (title, index) {
	console.log(index, title);
	return title.indexOf(keyword2) > -1;
});
console.log(test2);

let test3 = movies.some(function (title, index) {
	console.log(index, title);
	return title.indexOf(keyword3) > -1;
});
console.log(test3);
