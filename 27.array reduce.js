/*jshint esversion: 6*/



// Reduce all the values in an array into a single result
// It also uses a callback function
// array.reduce(callback, initialVal)
// also has a second parameter which is an initialValue

const numbers = [12, 34, 56, 78, 91];
// find the sum of all the numbers

const movies = ['Star wars', 'Star trek', 'Jaws', 'Jurassic park', 'Gross pointe blank', 'Eternal sunshine of the spotless mind', 'Memento', 'Dog soldiers', 'The host', 'Gran torino', 'Close encounters of the third kind', 'Good Will hunting', 'Layer cake', 'Casino royale', 'Almost famous'];
// find the first movie alphabetically

// let sum = numbers.reduce(function(acc,curr){
// 	return acc + curr;
// });
let sum = numbers.reduce((acc, curr) => acc + curr);

console.log('The sum is: ', sum, '\n');


// let first = movies.reduce(function(acc, curr, index){
// 	if (curr<acc){
// 		return curr;
// 	}
// 	else {return acc}
// });
let first = movies.reduce(function (acc, curr, index) {
	return (curr < acc) ? curr : acc;
});

console.log('The first movie is: ', first);

