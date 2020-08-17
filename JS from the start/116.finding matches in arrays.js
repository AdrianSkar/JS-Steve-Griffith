/*
- Array.prototype.indexOf()  //returns index number
- Array.prototype.contains() //returns boolean
- Array.prototype.filter()	 //returns array
- Array.prototype.some()		 //returns boolean
*/

let names = ['Archer', 'Lana', 'Cyril', 'Pam', 'Cheryl'];

let pos = names.indexOf('Pam');
console.log(pos, names[pos]);

//remove the element
names.splice(pos, 1);
console.log(names);

let movies = [
	{ id: 1, title: 'Shaun of the dead' },
	{ id: 2, title: 'Man up' },
	{ id: 3, title: 'Terminal' },
	{ id: 4, title: 'The end of the world' },
	{ id: 5, title: 'Hot fuzz' },
	{ id: 6, title: 'Mission impossible: fallout' }
];

let manUp = { id: 2, title: 'Man up' };
pos = movies.indexOf(manUp);
console.log('Man up in position', pos); // String !== [Object object]

let iterations = 0;

let matchingMovie = movies.filter(obj => {
	iterations++;
	if (obj.id === manUp.id) {
		return true;
	} return false;
});
console.log(matchingMovie[0], 'after looping', iterations);
iterations = 0;

let found = movies.some((obj, index) => {
	iterations++;
	if (obj.id === manUp.id) {
		pos = index;
		return true;
	} return false;
});


console.log(found.toString(), 'after looping', iterations);
console.log(movies[pos], 'after looping', iterations);

